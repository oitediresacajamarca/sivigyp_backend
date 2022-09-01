import { Controller, Get, Param } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DistritosEntity } from 'src/comunes/entidades/distritos.entity';
import { HistoriaClinicaEntity } from 'src/comunes/entidades/historia-clinica.entity';
import { IpressEntity } from 'src/comunes/entidades/ipress.entity';

import { PersonaEntity } from 'src/comunes/entidades/persona.entity';
import { ProvinciasEntity } from 'src/comunes/entidades/provincias.entity';
import { Repository } from 'typeorm';

@Controller('gestante')
export class GestanteController {
  constructor(
    @InjectRepository(PersonaEntity, 'db_svgyp')
    private Persona_Rep: Repository<PersonaEntity>,
    @InjectRepository(HistoriaClinicaEntity, 'db_svgyp')
    private Hcl_Rep: Repository<HistoriaClinicaEntity>,
    @InjectRepository(IpressEntity, 'db_svgyp')
    private Ipres_Rep: Repository<IpressEntity>,
    @InjectRepository(ProvinciasEntity, 'db_svgyp')
    private Prov_Rep: Repository<ProvinciasEntity>,
    @InjectRepository(DistritosEntity, 'db_svgyp')
    private Dist_Rep: Repository<DistritosEntity>,
  ) {}

  @Get('persona/:numero_documento')
  async devolver_gestante_numero_doumento(
    @Param('numero_documento') nro_documento: string,
  ) {
    const resp = await this.Persona_Rep.findOneBy({
      NRO_DOCUMENTO: nro_documento,
    });
    return resp;
  }
  @Get('persona_hc/:numero_documento')
  async devolver_gestante_hc_numero_doumento(
    @Param('numero_documento') nro_documento: string,
  ) {
    const resp = await this.Persona_Rep.find({
      where: { NRO_DOCUMENTO: nro_documento },
    });

    let resp_final = await Promise.all(
      resp.map(async (pern) => {
        const res_det = await this.Hcl_Rep.find({
          where: { ID_PERSONA: pern.ID_PERSONA },
        });

        return {
          ...pern,
          ...res_det[0],
          establecimientos_cantidad: res_det.length,
        };
      }),
    );
    resp_final = await this.aniadir_ipress(resp_final);
    resp_final = await this.aniadir_ditrito(resp_final);
    resp_final = await this.aniadir_provincia(resp_final);

    return resp_final;
  }
  @Get('persona_hc_por_ipress/:ipress')
  async devolver_gestante_hc_por_ipress(@Param('ipress') ipress: string) {
    const hc_resp = await this.Hcl_Rep.find({
      where: { COD_IPRESS: ipress },
      skip: 1,
      take: 7,
    });
    let resp_final = await Promise.all(
      hc_resp.map(async (hc) => {
        const per = await this.Persona_Rep.find({
          where: { ID_PERSONA: hc.ID_PERSONA },
        });
        return { ...per[0], ...hc, numero_personas: per.length };
      }),
    );

    resp_final = await this.aniadir_ipress(resp_final);
    resp_final = await this.aniadir_ditrito(resp_final);
    resp_final = await this.aniadir_provincia(resp_final);

    return resp_final;
  }

  @Get('persona_hc_por_ipress/:numero_documento/:ipress')
  async devolver_gestante_hc_numero_doumento_por_ipress(
    @Param('numero_documento') nro_documento: string,
    @Param('ipress') ipress: string,
  ) {
    const resp = await this.Persona_Rep.find({
      where: {
        NRO_DOCUMENTO: nro_documento,
      },
    });

    let resp_final = await Promise.all(
      resp.map(async (pern) => {
        const res_det = await this.Hcl_Rep.find({
          where: { ID_PERSONA: pern.ID_PERSONA, COD_IPRESS: ipress },
        });

        return {
          ...pern,
          ...res_det[0],
          establecimientos_cantidad: res_det.length,
        };
      }),
    );
    resp_final = await this.aniadir_ipress(resp_final);
    resp_final = await this.aniadir_ditrito(resp_final);
    resp_final = await this.aniadir_provincia(resp_final);

    return resp_final;
  }

  @Get('persona_hc/:numero_documento')
  async devolver_gestante_hc(@Param('numero_documento') nro_documento: string) {
    const resp = await this.Persona_Rep.find({
      where: {
        NRO_DOCUMENTO: nro_documento,
      },
    });
    let resp_final = await Promise.all(
      resp.map(async (pern) => {
        const res_det = await this.Hcl_Rep.find({
          where: { ID_PERSONA: pern.ID_PERSONA },
        });

        return {
          ...pern,
          ...res_det[0],
          establecimientos_cantidad: res_det.length,
        };
      }),
    );

    resp_final = await this.aniadir_ipress(resp_final);
    resp_final = await this.aniadir_ditrito(resp_final);
    resp_final = await this.aniadir_provincia(resp_final);
    return resp_final;
  }

  async aniadir_ipress(datos: any[]) {
    const resp = await Promise.all(
      datos.map(async (dat) => {
        const data = await this.Ipres_Rep.findOne({
          where: { COD_IPRESS: dat.COD_IPRESS },
        });
        return { ...dat, ipress: { ...data } };
      }),
    );
    return resp;
  }

  async aniadir_ditrito(datos: any[]) {
    const resp = await Promise.all(
      datos.map(async (dat) => {
        const data = await this.Dist_Rep.findOne({
          where: { ID_DISTRITO: dat.ID_DISTRITO },
        });
        return { ...dat, distrito: { ...data } };
      }),
    );
    return resp;
  }
  async aniadir_provincia(datos: any[]) {
    const resp = await Promise.all(
      datos.map(async (dat) => {
        console.log(dat);
        const data = await this.Prov_Rep.findOne({
          where: { ID_PROVINCIA: dat.distrito.ID_PROVINCIA },
        });
        console.log(data);
        return { ...dat, provincia: { ...data } };
      }),
    );
    return resp;
  }
}
