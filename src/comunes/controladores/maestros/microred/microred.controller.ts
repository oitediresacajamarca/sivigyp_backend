import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MicroredEntity } from 'src/comunes/entidades/microred.entity';
import { Repository } from 'typeorm';

@Controller('microred')
export class MicroredController {
  constructor(
    @InjectRepository(MicroredEntity, 'db_svgyp')
    private micor_rep: Repository<MicroredEntity>,
  ) {}

  @Get('red/:id_red')
  async devolver_microred_por_red(@Param('id_red') id_red: number) {
    const rest = await this.micor_rep.find({ where: { ID_RED: id_red } });
    return rest;
  }
}
