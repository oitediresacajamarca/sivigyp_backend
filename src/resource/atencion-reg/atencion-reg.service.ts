/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { LessThan, Repository } from 'typeorm';
import { CreateAtencionRegDto } from './dto/create-atencion-reg.dto';
import { UpdateAtencionRegDto } from './dto/update-atencion-reg.dto';
import { AtencionReg } from './entities/atencion-reg.entity';
import * as moment from 'dayjs';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';

import { Between } from 'typeorm';
import { RptCbetaAcumEntity } from 'src/comunes/entidades/rpt_cbeta_acum.entity';

@Injectable()
export class AtencionRegService {
  constructor(
    @InjectRepository(AtencionReg, 'db_svgyp')
    private atencionreg_rep: Repository<AtencionReg>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private atencion_rep: Repository<AtencionEntity>,
    @InjectRepository(RptCbetaAcumEntity, 'BDHIS_MINSA')
    private rpt_cbeta: Repository<RptCbetaAcumEntity>,
  ) {}
  create(createAtencionRegDto: CreateAtencionRegDto) {
    return 'This action adds a new atencionReg';
  }

  findAll() {
    return `This action returns all atencionReg`;
  }

  async findOne(term: number) {
    const resp = await this.atencionreg_rep.findOneBy({ ID_ATENCION: term });
    return resp;
  }
  async findOneID_ATENCION(term: number) {
    const resp = await this.atencionreg_rep.find({
      where: { ID_ATENCION: term },
      order: { FECHA_ATENCION_REG: 'DESC' },
    });
    const elegido = {};
    const hoy = new Date();
    let fecha_siguiente = new Date(2500, 1, 1);

    const resp2 = resp.map((aten) => {
      let nuevo = {};

      if (moment(aten.FECHA_ATENCION_REG).diff(hoy, 'days') >= 0) {
        nuevo = { ...aten, est: 'pendiente' };

        if (aten.FECHA_ATENCION_REG < fecha_siguiente) {
          fecha_siguiente = aten.FECHA_ATENCION_REG;
        }
      } else {
        nuevo = { ...aten, est: 'pasado' };
      }

      return nuevo;
    });

    const resp3 = resp2.map((dat: any) => {
      let nuevo;
      if (
        moment(dat.FECHA_ATENCION_REG).format('YYYY MM DD') ==
        moment(fecha_siguiente).format('YYYY MM DD')
      ) {
        nuevo = { ...dat, ultima: true };
      } else {
        nuevo = { ...dat, ultima: false };
      }
      return nuevo;
    });
    const resp4 = resp3.filter((dat) => {
      return dat.ultima == true;
    });

    return resp4;
  }

  update(id: number, updateAtencionRegDto: UpdateAtencionRegDto) {
    return `This action updates a #${id} atencionReg`;
  }

  remove(id: number) {
    return `This action removes a #${id} atencionReg`;
  }

  async generar_atencion_reg(id_atencion: number, fecha_atencion_reg: Date) {
    const aten = await this.atencion_rep.findOne({
      where: { ID_ATENCION: id_atencion },
    });

    const fecha_pp: Date = moment(aten.FUR_ATENCION)
      .add(-3, 'months')
      .add(4, 'days')
      .toDate();

    const semana_gestacion = moment().diff(moment(aten.FUR_ATENCION), 'weeks');

    let citas: any[] = [];
    let semana_gestacion_it = 0;
    let fecha_programada_it = aten.FUR_ATENCION;
    let count = 0;

    while (semana_gestacion_it < 30) {
      count++;
      fecha_programada_it = moment(fecha_programada_it)
        .add(1, 'month')
        .toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        numero_cita: count,
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
        ESTADO_ATENCION: 1,
      });
    }

    while (semana_gestacion_it >= 30 && semana_gestacion_it < 35) {
      count++;
      fecha_programada_it = moment(fecha_programada_it).add(15, 'day').toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        numero_cita: count,
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
        ESTADO_ATENCION: 1,
      });
    }

    while (semana_gestacion_it >= 35 && semana_gestacion_it < 42) {
      count++;
      fecha_programada_it = moment(fecha_programada_it).add(7, 'day').toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        numero_cita: count,
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
        ESTADO_ATENCION: 1,
      });
    }
    citas = citas.filter((cita) => {
      return moment(cita.fecha_cita).diff(new Date(), 'days') >= 0;
    });

    const atenciones: AtencionReg[] = citas.map((cita) => {
      return {
        ID_ATENCION: id_atencion,
        FECHA_ATENCION_REG: cita.fecha_cita,
        EDAD_GESTACIONAL: cita.semana_gestacion,
        ESTADO_ATENCION: cita.ESTADO_ATENCION,
        USU: '',
        ESTADO_CERRADO: 0,
        CORRELATIVO: cita.numero_cita,
        FEC_REGISTRO: new Date(),
        OBSERVACIONES: cita.OBSERVACION,
      };
    });
    const resp4 = await this.atencionreg_rep.save(atenciones);
    const resp5 = await this.findOneID_ATENCION(id_atencion);

    return resp5;
  }

  async atender(id_atencion: number, payload: any) {
    const atencion_actualizar = await this.atencionreg_rep.findOne({
      where: {
        ID_ATENCION_REG: id_atencion,
      },
    });
    atencion_actualizar.ESTADO_ATENCION = 2;
    atencion_actualizar.OBSERVACIONES = payload.OBSERVACION;

    const resp = await this.atencionreg_rep.save(atencion_actualizar);
    return resp;
  }

  async reprogramar(id_atencion: number, payload: any) {
    const atencion = await this.atencionreg_rep.findOne({
      where: { ID_ATENCION_REG: id_atencion },
    });
    atencion.OBSERVACIONES = payload.OBSERVACION;
    atencion.FECHA_ATENCION_REG = payload.FECHA;

    const resp = await this.atencionreg_rep.save(atencion);
    return resp;
  }

  async noatender(id_atencion: number, payload: any) {
    const atencion_actualizar = await this.atencionreg_rep.findOne({
      where: {
        ID_ATENCION_REG: id_atencion,
      },
    });
    atencion_actualizar.ESTADO_ATENCION = 3;
    atencion_actualizar.OBSERVACIONES = payload.OBSERVACION;

    const resp = await this.atencionreg_rep.save(atencion_actualizar);
    return resp;
  }
  async eliminar(id_atencion: number) {
    const atencion_actualizar = await this.atencionreg_rep.findOne({
      where: {
        ID_ATENCION_REG: id_atencion,
      },
    });

    const resp = await this.atencionreg_rep.remove(atencion_actualizar);
    return resp;
  }
  reporte_gestantes(ipress: string, body: any) {
    const ateciones_reg = this.atencionreg_rep.find({
      where: { FECHA_ATENCION_REG: Between(body.desde, body.hasta) },
      relations: [
        'ATENCION',
        'ATENCION.HistoriaClinica',
        'ATENCION.HistoriaClinica.PERSONA',
        'ATENCION.HistoriaClinica.PERSONA.DISTRITO',
        'ATENCION.HistoriaClinica.PERSONA.DISTRITO.PROVINCIA',
        'ATENCION.HistoriaClinica.IPRESS',
        'ATENCION.HistoriaClinica.IPRESS.MICRORED',
        'ATENCION.HistoriaClinica.IPRESS.MICRORED.RED',
        'ATENCION.HistoriaClinica.CENTRO_POBLADO',
      ],
    });

    return ateciones_reg;
  }
  async pendientes(ipress: string, body: any) {
    const fecha = moment(new Date(body.fecha)).toDate();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const day = fecha.getDate();

    const rest = await this.atencionreg_rep
      .createQueryBuilder('ATENCION_REG')
      .leftJoinAndSelect('ATENCION_REG.ATENCION', 'ATENCION')
      .leftJoinAndSelect('ATENCION.HistoriaClinica', 'HistoriaClinica')
      .leftJoinAndSelect('HistoriaClinica.PERSONA', 'PERSONA')
      .leftJoinAndSelect('ATENCION.RIESGOS', 'RIESGOS')
      .where(
        'HistoriaClinica.COD_IPRESS=:IPRESS AND day(ATENCION_REG.FECHA_ATENCION_REG)=:day AND month(ATENCION_REG.FECHA_ATENCION_REG)=:mes AND year(ATENCION_REG.FECHA_ATENCION_REG)=:anio',
        { IPRESS: ipress, anio: anio, mes: mes, day: day },
      )
      .andWhere('ATENCION_REG.ESTADO_ATENCION IN (1,0)')
      .andWhere('ATENCION_REG.ESTADO_CERRADO IN (0)')

      .orderBy('ATENCION_REG.FECHA_ATENCION_REG', 'DESC')
      .limit(body.len)
      .skip(body.pagina)
      .getMany();

    /*  const rest2 = await this.atencionreg_rep.find({
      where: { FECHA_ATENCION_REG: LessThan(fecha) },
      relations: ['ATENCION', 'ATENCION.HistoriaClinica.PERSONA'],
      order: { FECHA_ATENCION_REG: 'DESC' },
    });*/

    return rest;
  }
}
