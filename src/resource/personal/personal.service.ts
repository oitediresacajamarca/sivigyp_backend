import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IpressEntity } from 'src/comunes/entidades/ipress.entity';
import { TrabajadorIpressEntity } from 'src/comunes/entidades/trabajador-ipress.entity';
import { Repository } from 'typeorm';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(IpressEntity, 'db_svgyp')
    private ipress_rep: Repository<IpressEntity>,
    @InjectRepository(TrabajadorIpressEntity, 'db_svgyp')
    private trabajador_ipress_rep: Repository<TrabajadorIpressEntity>,
  ) {}
  create(createPersonalDto: CreatePersonalDto) {
    return 'This action adds a new personal';
  }

  findAll() {
    return `This action returns all personal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personal`;
  }

  update(id: number, updatePersonalDto: UpdatePersonalDto) {
    return `This action updates a #${id} personal`;
  }

  remove(id: number) {
    return `This action removes a #${id} personal`;
  }
  async findAllIpress(ipress: string) {
    const res = await this.ipress_rep.findOne({
      where: { COD_IPRESS: ipress },
    });

    const resp1 = await this.trabajador_ipress_rep.find({
      where: { ID_IPRESS: res.COD_IPRESS },
      relations: ['persona', 'profesion', 'codicion_laboral'],
    });

    return resp1;
  }
}
