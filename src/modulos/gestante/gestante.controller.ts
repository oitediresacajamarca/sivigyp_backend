import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DistritosEntity } from 'src/comunes/entidades/distritos.entity';
import { HistoriaClinicaEntity } from 'src/comunes/entidades/historia-clinica.entity';
import { IpressEntity } from 'src/comunes/entidades/ipress.entity';

import { PersonaEntity } from 'src/comunes/entidades/persona.entity';
import { ProvinciasEntity } from 'src/comunes/entidades/provincias.entity';
import { Repository } from 'typeorm';
import { DatosComplementarios } from './dtos/datos_complementarios';
import { NuevoPacienteDto } from './dtos/nuevo-paciente-dto';
import { Response } from 'express';
import { PaginacionDto } from './dtos/paginacion.dto';

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
  async devolver_gestante_hc_por_ipress(
    @Param('ipress') ipress: string,
    @Query() paginacion: PaginacionDto,
  ) {
    const { limit = 10, skip = 1 } = paginacion;
    const hc_resp = await this.Hcl_Rep.find({
      where: { COD_IPRESS: ipress },
      relations: ['PERSONA'],
      skip: skip,
      take: limit,
    });
    const cantidad_reg = await this.Hcl_Rep.count({
      where: { COD_IPRESS: ipress },
    });
    const cantidad_paginas = (cantidad_reg / limit) | 0;
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

    return {
      datos: resp_final,
      cantidad_reg: cantidad_reg,
      cantidad_paginas: cantidad_paginas,
    };
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

  @Post('persona_hc/:numero_documento')
  async nueva_hc(
    @Param('numero_documento') nro_documento: string,
    @Body('persona') persona: NuevoPacienteDto,
    @Body('datos_complementarios') datos_complementarios: DatosComplementarios,
    @Res() res: Response,
  ) {
    let personas = await this.Persona_Rep.find({
      where: { NRO_DOCUMENTO: persona.nro_documento },
    });
    let resp: any;
    if (personas.length >= 1) {
      throw new NotFoundException('ya existe en base de datos');
    }
    if (personas.length == 0) {
      const este = this.Persona_Rep.create({
        NRO_DOCUMENTO: persona.nro_documento,
        APELLIDO_PAT: persona.apellido_paterno,
        APELLIDO_MAT: persona.apellido_paterno,
        CORREO: persona.correo,
        DIRECCION: persona.direccion,
        FECHA_NAC: persona.fecha_nacimiento,
        ID_DISTRITO: persona.distrito,
        ID_GENERO: 2,
        ID_TIPOD: 1,
        NOMBRES: persona.nombres,
        TELEFONO: persona.numero_telefono,
        TELEFONO_ADICIONAL: persona.numero_telefono_adicional,
      });
      resp = await this.Persona_Rep.save(este);
    }
    personas = await this.Persona_Rep.find({
      where: { NRO_DOCUMENTO: persona.nro_documento },
    });

    const resp_comp = await this.Hcl_Rep.insert({
      BENEFICIARIA_JUNTOS: persona.beneficiaria_juntos,
      COD_IPRESS: persona.COD_IPRESS,
      ESTADO_CIVIL: datos_complementarios.estado_civil,
      ESTADO_HC: 1,
      FACTOR_SANGUINEO: datos_complementarios.factor_sanguineo,
      FEC_REGISTRO: new Date(),
      GRUPO_SANGUINEO: datos_complementarios.grupo_sanguineo,
      ID_CENTRO_POBLADO: persona.centro_poblado,
      ID_GRADO_INSTRUCCION: datos_complementarios.grado_instruccion,
      ID_PERSONA: personas[0].ID_PERSONA,
      IDIOMA: datos_complementarios.idioma,
      RELIGION: datos_complementarios.religion,
      TELEFONO: persona.numero_telefono,
      TIPO_SEGURO: datos_complementarios.tipo_seguro,
      NRO_HCL: persona.nro_documento,
    });

    res.status(HttpStatus.CREATED).json({
      ...resp,
      ...resp_comp,
      mensaje: 'se registro con exito',
      estado: 'OK',
    });
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
        const data = await this.Prov_Rep.findOne({
          where: { ID_PROVINCIA: dat.distrito.ID_PROVINCIA },
        });

        return { ...dat, provincia: { ...data } };
      }),
    );
    return resp;
  }
}
