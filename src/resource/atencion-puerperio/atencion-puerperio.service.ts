import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AtencionPartoEntity } from '../atencion-parto/entities/atencion-parto.entity';
import { CreateAtencionPuerperioDto } from './dto/create-atencion-puerperio.dto';
import { GenerarCitasPuerperioDto } from './dto/generar_citas_puerperio.dto';
import { UpdateAtencionPuerperioDto } from './dto/update-atencion-puerperio.dto';
import * as moment from 'moment';
import { AtencionPuerperioEntity } from 'src/comunes/entidades/atencion-puerperio.entity';

@Injectable()
export class AtencionPuerperioService {
  constructor(
    @InjectRepository(AtencionPartoEntity, 'db_svgyp')
    private atencion_parto_rep: Repository<AtencionPartoEntity>,
    @InjectRepository(AtencionPuerperioEntity, 'db_svgyp')
    private atencion_puerperio_rep: Repository<AtencionPuerperioEntity>,
  ) {}
  create(createAtencionPuerperioDto: CreateAtencionPuerperioDto) {
    return 'This action adds a new atencionPuerperio';
  }
  async crear_citas(dto_cita: GenerarCitasPuerperioDto) {
    const atencion_parto = await this.atencion_parto_rep.findOne({
      where: { ID_ATENCION: dto_cita.ID_ATENCION_PARTO },
      relations: ['ATENCION.AtencionesPuerperios'],
    });

    atencion_parto.ATENCION.AtencionesPuerperios = [];
    atencion_parto.ATENCION.AtencionesPuerperios.push({
      ESTADO_CERRADO: 0,
      ESTADO_PUERPERIO: 0,
      FECHA_ATENCION: moment(atencion_parto.FECHA_PARTO)
        .add(7, 'days')
        .toDate(),
      FECHA_REGISTRO: new Date(),
      NRO_ATENCION: 1,
      ID_ATENCION: atencion_parto.ATENCION.ID_ATENCION,
    });

    atencion_parto.ATENCION.AtencionesPuerperios.push({
      ESTADO_CERRADO: 0,
      ESTADO_PUERPERIO: 0,
      FECHA_ATENCION: moment(atencion_parto.FECHA_PARTO)
        .add(15, 'days')
        .toDate(),
      FECHA_REGISTRO: new Date(),
      NRO_ATENCION: 2,
      ID_ATENCION: atencion_parto.ATENCION.ID_ATENCION,
    });

    const resp2 = await this.atencion_puerperio_rep.insert(
      atencion_parto.ATENCION.AtencionesPuerperios,
    );

    return resp2;
  }

  async atender_cita(ID_ATENCION_PUERPERIO: number) {
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.ESTADO_PUERPERIO = 2;
    const resp = await this.atencion_puerperio_rep.save(atencion_puerperio_rep);
    return { resp };
  }

  async reprogramar(ID_ATENCION_PUERPERIO: number,fecha:any){
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.FECHA_ATENCION = fecha;
    const resp = await this.atencion_puerperio_rep.save(atencion_puerperio_rep);
    return { resp };


  }
  async no_atender(ID_ATENCION_PUERPERIO: number,data:any){
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.ESTADO_PUERPERIO=3;
    const resp = await this.atencion_puerperio_rep.save(atencion_puerperio_rep);
    return { resp };


  }

  findAll() {
    return `This action returns all atencionPuerperio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atencionPuerperio`;
  }

  update(id: number, updateAtencionPuerperioDto: UpdateAtencionPuerperioDto) {
    return `This action updates a #${id} atencionPuerperio`;
  }

  remove(id: number) {
    return `This action removes a #${id} atencionPuerperio`;
  }
}
