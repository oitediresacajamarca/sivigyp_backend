import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AtencionPartoEntity } from '../atencion-parto/entities/atencion-parto.entity';
import { CreateAtencionPuerperioDto } from './dto/create-atencion-puerperio.dto';
import { GenerarCitasPuerperioDto } from './dto/generar_citas_puerperio.dto';
import { UpdateAtencionPuerperioDto } from './dto/update-atencion-puerperio.dto';
import * as moment from 'moment';
import { AtencionPuerperioEntity } from 'src/comunes/entidades/atencion-puerperio.entity';
import { AtencionesPpffEntity } from 'src/comunes/entidades/atenciones_ppff.entity/atenciones_ppff.entity';

@Injectable()
export class AtencionPuerperioService {
  constructor(
    @InjectRepository(AtencionPartoEntity, 'db_svgyp')
    private atencion_parto_rep: Repository<AtencionPartoEntity>,
    @InjectRepository(AtencionPuerperioEntity, 'db_svgyp')
    private atencion_puerperio_rep: Repository<AtencionPuerperioEntity>,
    @InjectRepository(AtencionesPpffEntity, 'db_svgyp')
    private atencion_ppff_rep: Repository<AtencionesPpffEntity>,
  ) { }
  async create(createAtencionPuerperioDto: any) {

    const nuevo = this.atencion_puerperio_rep.create({
      ID_ATENCION: createAtencionPuerperioDto.ID_ATENCION, ESTADO_CERRADO: 0, FECHA_ATENCION: createAtencionPuerperioDto.FECHA_NUEVA_CITA,
      ESTADO_PUERPERIO: 0, FECHA_REGISTRO: new Date()
    })
    const resp = await this.atencion_puerperio_rep.save(nuevo)
    return resp


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

  async atender_cita(ID_ATENCION_PUERPERIO: number,atencion_ppff:any) {
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.ESTADO_PUERPERIO = 2;
   const atppf= await this.atencion_ppff_rep.find({where:{ID_ATENCION:atencion_puerperio_rep.ID_ATENCION,FECHA_ADMINISTRACION_PPFF:atencion_puerperio_rep.FECHA_ATENCION}})
   console.log(atppf)
   if(atppf.length>0){
    //this.atencion_ppff_rep.delete(atppf.)
    await this.atencion_ppff_rep.update({ID_ATENCION:atencion_puerperio_rep.ID_ATENCION,FECHA_ADMINISTRACION_PPFF:atencion_puerperio_rep.FECHA_ATENCION},
      {TIPO_PPFF:atencion_ppff.ID_METODO})

   }
   else {

   await this.atencion_ppff_rep.save({ID_ATENCION:atencion_puerperio_rep.ID_ATENCION,FECHA_ADMINISTRACION_PPFF:atencion_puerperio_rep.FECHA_ATENCION,
    TIPO_PPFF:atencion_ppff.ID_METODO,FECHA_REGISTRO:new Date()})
   }
    const resp = await this.atencion_puerperio_rep.save(atencion_puerperio_rep);
    return { resp };
  }

  async reprogramar(ID_ATENCION_PUERPERIO: number, fecha: any) {
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.FECHA_ATENCION = fecha;
    const resp = await this.atencion_puerperio_rep.save(atencion_puerperio_rep);
    return { resp };


  }
  async no_atender(ID_ATENCION_PUERPERIO: number, data: any) {
    const atencion_puerperio_rep = await this.atencion_puerperio_rep.findOne({
      where: { ID_ATENCION_PUERPERIO: ID_ATENCION_PUERPERIO },
    });
    atencion_puerperio_rep.ESTADO_PUERPERIO = 3;
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

  async remove(id: number) {

    const resp = await this.atencion_puerperio_rep.delete(+id)
    return resp
  }

}
