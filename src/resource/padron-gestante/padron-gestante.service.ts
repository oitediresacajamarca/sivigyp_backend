import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PadronGestanteSivEntity } from 'src/comunes/entidades/padron-gestante-siv.entity';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';

import { Repository } from 'typeorm';
import { CreatePadronGestanteDto } from './dto/create-padron-gestante.dto';
import { UpdatePadronGestanteDto } from './dto/update-padron-gestante.dto';

@Injectable()
export class PadronGestanteService {
  constructor(
    @InjectRepository(PadronGestanteHisEntity, 'BDHIS_MINSA')
    private padron_rep: Repository<PadronGestanteHisEntity>,
    @InjectRepository(PadronGestanteSivEntity, 'db_svgyp')
    private padron_rep_SIV: Repository<PadronGestanteSivEntity>,
  ) {}
  create(createPadronGestanteDto: CreatePadronGestanteDto) {
    return 'This action adds a new padronGestante';
  }
  get_padron(ambito: string) {
    return this.padron_rep.find({ where: { RENIPRESS: ambito } });
  }

  get_padron_ipress_SIV(ambito: string) {
    return this.padron_rep_SIV.find({ where: { COD_IPRESS: ambito } });
  }

  findAll() {
    return `This action returns all padronGestante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} padronGestante`;
  }

  update(id: number, updatePadronGestanteDto: UpdatePadronGestanteDto) {
    return `This action updates a #${id} padronGestante`;
  }

  remove(id: number) {
    return `This action removes a #${id} padronGestante`;
  }
}
