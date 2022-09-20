/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { getDataSourceName, InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateAtencionRegDto } from './dto/create-atencion-reg.dto';
import { UpdateAtencionRegDto } from './dto/update-atencion-reg.dto';
import { AtencionReg } from './entities/atencion-reg.entity';
import * as moment from 'moment';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { AtencionRegInterface } from 'src/comunes/interfaces/atencion-reg.interface';

@Injectable()
export class AtencionRegService {
  constructor(
    @InjectRepository(AtencionReg, 'db_svgyp')
    private atencionreg_rep: Repository<AtencionReg>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private atencion_rep: Repository<AtencionEntity>,
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
    let fecha_siguiente = new Date();
    const resp2 = resp.map((aten) => {
      let nuevo = {};
      if (aten.FECHA_ATENCION_REG >= new Date()) {
        nuevo = { ...aten, est: 'pendiente' };
        if (aten.FECHA_ATENCION_REG <= fecha_siguiente) {
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

    return resp3;
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

    while (semana_gestacion_it < 30) {
      fecha_programada_it = moment(fecha_programada_it)
        .add(1, 'month')
        .toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
      });
    }

    while (semana_gestacion_it >= 30 && semana_gestacion_it < 35) {
      fecha_programada_it = moment(fecha_programada_it).add(15, 'day').toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
      });
    }

    while (semana_gestacion_it >= 35 && semana_gestacion_it < 42) {
      fecha_programada_it = moment(fecha_programada_it).add(7, 'day').toDate();

      semana_gestacion_it = moment(fecha_programada_it).diff(
        moment(aten.FUR_ATENCION),
        'weeks',
      );
      citas.push({
        fecha_cita: fecha_programada_it,
        semana_gestacion: semana_gestacion_it,
      });
    }
    citas = citas.filter((cita) => {
      return cita.fecha_cita >= new Date();
    });

    const atenciones: AtencionReg[] = citas.map((cita) => {
      return {
        ID_ATENCION: id_atencion,
        FECHA_ATENCION_REG: cita.fecha_cita,
        EDAD_GESTACIONAL: cita.semana_gestacion,
        ESTADO_ATENCION: cita.ESTADO_ATENCION,
        USU: '',
        ESTADO_CERRADO: 0,
      };
    });
    const resp4 = await this.atencionreg_rep.save(atenciones);

    return resp4;
  }
}
