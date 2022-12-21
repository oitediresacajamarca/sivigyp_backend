import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PadronGestanteSivEntity } from 'src/comunes/entidades/padron-gestante-siv.entity';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';

import { Like, Repository } from 'typeorm';
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

  async get_padron_ambito_siv(ambito:any){
    console.log(ambito)
 
   let ret={}
    ret= await this.padron_rep_SIV.createQueryBuilder('PADRON')
    .where('(PADRON.ID_RED = :RED OR 1=:condicion_red)', {
      RED: parseInt(ambito.ID_RED),
      condicion_red: parseInt(ambito.ID_RED) == 0 ? 1 : 2,
    })
    .andWhere('(PADRON.ID_MICRORED = :ID_MICRORED OR 1=:condicion_micro)', {
      ID_MICRORED: parseInt(ambito.ID_MICRORED),
      condicion_micro: parseInt(ambito.ID_MICRORED) == 0 ? 1 : 2,
    })
    .andWhere('(PADRON.COD_IPRESS = :ID_IPRESS OR 1=:condicion_ipress)', {
      ID_IPRESS: parseInt(ambito.ID_IPRESS),
      condicion_ipress: parseInt(ambito.ID_IPRESS) == 0 ? 1 : 2,
    }).getMany()

return ret
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
