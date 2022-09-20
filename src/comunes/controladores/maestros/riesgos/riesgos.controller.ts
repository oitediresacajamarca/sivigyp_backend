import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RiesgosEntity } from 'src/comunes/entidades/riesgos.entity';
import { Repository } from 'typeorm';

@Controller('riesgos')
export class RiesgosController {
  constructor(
    @InjectRepository(RiesgosEntity, 'db_svgyp')
    private riesgo_rep: Repository<RiesgosEntity>,
  ) {}

  @Get('')
  async devolver_riesgos() {
    return await this.riesgo_rep.find();
  }
}
