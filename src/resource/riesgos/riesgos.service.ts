import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { RiesgosEntity } from 'src/comunes/entidades/riesgos.entity';
import { Repository } from 'typeorm';
import { CreateRiesgoDto } from './dto/create-riesgo.dto';
import { UpdateRiesgoDto } from './dto/update-riesgo.dto';

@Injectable()
export class RiesgosService {
  constructor(
    @InjectRepository(RiesgosEntity, 'db_svgyp')
    private atencionreg_rep: Repository<RiesgosEntity>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private atencion_rep: Repository<AtencionEntity>,
  ) {}

  create(createRiesgoDto: CreateRiesgoDto) {
    return 'This action adds a new riesgo';
  }

  async asignar(ID_ATENCION, body: any) {
    const aten = await this.atencion_rep.findOne({
      where: { ID_ATENCION: ID_ATENCION },
    });
    aten.RIESGOS = [];
    aten.RIESGOS = body.RIESGOS;


    const resp = await this.atencion_rep.save(aten);

    return resp;
  }

  cargar_riesgos(ID_ATENCION) {
    return;
  }
  findAll() {
    return `This action returns all riesgos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riesgo`;
  }

  update(id: number, updateRiesgoDto: UpdateRiesgoDto) {
    return `This action updates a #${id} riesgo`;
  }

  remove(id: number) {
    return `This action removes a #${id} riesgo`;
  }
}
