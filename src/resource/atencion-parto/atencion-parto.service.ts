import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { Repository } from 'typeorm';
import { CreateAtencionPartoDto } from './dto/create-atencion-parto.dto';
import { UpdateAtencionPartoDto } from './dto/update-atencion-parto.dto';
import { AtencionPartoEntity } from './entities/atencion-parto.entity';
import * as moment from 'moment';
import { PersonaEntity } from 'src/comunes/entidades/persona.entity';
import { NuevoPacienteDto } from 'src/modulos/gestante/dtos/nuevo-paciente-dto';
import { Nacimiento } from '../nacimiento/entities/nacimiento.entity';

@Injectable()
export class AtencionPartoService {
  constructor(
    @InjectRepository(AtencionPartoEntity, 'db_svgyp')
    private atencion_parto_rep: Repository<AtencionPartoEntity>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private atencion_rep: Repository<AtencionEntity>,
    @InjectRepository(PersonaEntity, 'db_svgyp')
    private persona_rep: Repository<PersonaEntity>,
    @InjectRepository(Nacimiento, 'db_svgyp')
    private nacimiento_rep: Repository<Nacimiento>,
  ) {}
  async create(createAtencionPartoDto: CreateAtencionPartoDto) {
    const atencion = await this.atencion_rep.findOne({
      where: { ID_ATENCION: createAtencionPartoDto.ID_ATENCION },
    });
    const semana_gestacion = moment(createAtencionPartoDto.FECHA_PARTO).diff(
      atencion.FUR_ATENCION,
      'weeks',
    );

    const nuevo = this.atencion_parto_rep.create({
      EDAD_GESTACIONAL: semana_gestacion,
      FEC_REGISTRO: new Date(),
      FECHA_PARTO: createAtencionPartoDto.FECHA_PARTO,
      HORA_PARTO: createAtencionPartoDto.HORA_PARTO,
      ID_ATENCION: createAtencionPartoDto.ID_ATENCION,
      RN_PESO: createAtencionPartoDto.NACIMIENTOS[0].RN_PESO,
      RN_SEXO: createAtencionPartoDto.NACIMIENTOS[0].RN_SEXO,
      RN_VIVO: createAtencionPartoDto.NACIMIENTOS[0].RN_VIVO,
      TIPO_PARTO: createAtencionPartoDto.TIPO_PARTO,
      TIPO_RECIEN_NACIDO: createAtencionPartoDto.TIPO_RECIEN_NACIDO,
      NACIMIENTOS: [],
    });

    createAtencionPartoDto.NACIMIENTOS.forEach((NACI) => {
      nuevo.NACIMIENTOS.push({
        GENERO: NACI.RN_SEXO,
        PESO: NACI.RN_PESO,
        VIVO: NACI.RN_VIVO,
      });
    });

    const res = await this.atencion_parto_rep.save(nuevo);
    this.nacimiento_rep.save(nuevo.NACIMIENTOS);
    return res;
  }

  async devolver_partos_por_atencion(id_atencion: number) {
    const respuesta2 = await this.atencion_parto_rep
      .createQueryBuilder('parto')
      .leftJoinAndSelect('parto.ATENCION', 'Atencion')
      .leftJoinAndSelect('Atencion.HistoriaClinica', 'HistoriaClinica')
      .leftJoinAndSelect('HistoriaClinica.PERSONA', 'PERSONA')
      .leftJoinAndSelect('parto.NACIMIENTOS', 'NACIMIENTOS')
      .where('Atencion.ID_ATENCION= :DOC', {
        DOC: id_atencion,
      })
      .getMany();
    return respuesta2;
  }

  findAll() {
    return `This action returns all atencionParto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atencionParto`;
  }

  update(id: number, updateAtencionPartoDto: UpdateAtencionPartoDto) {
    return `This action updates a #${id} atencionParto`;
  }

  remove(id: number) {
    return `This action removes a #${id} atencionParto`;
  }
}
