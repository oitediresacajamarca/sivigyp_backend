import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFichaCmiDto } from './dto/create-ficha_cmi.dto';
import { UpdateFichaCmiDto } from './dto/update-ficha_cmi.dto';
import { FichaCmi } from './entities/ficha_cmi.entity';

@Injectable()
export class FichaCmiService {
  constructor(@InjectRepository(FichaCmi, 'BDHIS_MINSA')
  private ficha_rep: Repository<FichaCmi>) { }
  async create(createFichaCmiDto: CreateFichaCmiDto) {
    const fic_ = this.ficha_rep.create(createFichaCmiDto)
    const rest = await this.ficha_rep.save(fic_)
    return rest

  }

  findAll() {
    return `This action returns all fichaCmi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fichaCmi`;
  }

  update(id: number, updateFichaCmiDto: UpdateFichaCmiDto) {
    return `This action updates a #${id} fichaCmi`;
  }

  remove(id: number) {
    return `This action removes a #${id} fichaCmi`;
  }
}
