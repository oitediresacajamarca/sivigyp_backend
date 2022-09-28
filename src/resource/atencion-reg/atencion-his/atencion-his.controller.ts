import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RptCbetaAcumEntity } from 'src/comunes/entidades/rpt_cbeta_acum.entity';
import { Like, Repository } from 'typeorm';

@Controller('atencion-his')
export class AtencionHisController {
  constructor(
    @InjectRepository(RptCbetaAcumEntity, 'BDHIS_MINSA')
    private atencion_rep: Repository<RptCbetaAcumEntity>,
  ) {}
  @Get(':nro_documento')
  async devolver_atenciones_gestante(
    @Param('nro_documento') nro_documento: string,
  ) {
    const atenciones = await this.atencion_rep.find({
      where: {
        numero_documento: nro_documento,
        Codigo_Item: Like('Z3%'),
      },
    });
    const res: any[] = new Array(56);
    let bus = atenciones.filter((dat) => {
      return dat.Valor_Lab == '1';
    });

    if (bus[0] != undefined) {
      res[1] = bus[0];
    }

    bus = atenciones.filter((dat) => {
      return dat.Valor_Lab == '2';
    });

    if (bus[0] != undefined) {
      res[2] = bus[0];
    }
    bus = atenciones.filter((dat) => {
      return dat.Valor_Lab == '3';
    });

    if (bus[0] != undefined) {
      res[3] = bus[0];
    }
    bus = atenciones.filter((dat) => {
      return dat.Valor_Lab == '4';
    });

    if (bus[0] != undefined) {
      res[4] = bus[0];
    }
    bus = atenciones.filter((dat) => {
      return dat.Valor_Lab == '5';
    });

    if (bus[0] != undefined) {
      res[5] = bus[0];
    }

    return res;
  }
}
