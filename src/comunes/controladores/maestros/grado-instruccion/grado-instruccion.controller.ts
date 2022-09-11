import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GradoInstruccionEntity } from 'src/comunes/entidades/grado-instruccion.entity';
import { Repository } from 'typeorm';

@Controller('grado-instruccion')
export class GradoInstruccionController {
  constructor(
    @InjectRepository(GradoInstruccionEntity, 'db_svgyp')
    private Grados_Rep: Repository<GradoInstruccionEntity>,
  ) {}

  @Get('')
  async lista_grados() {
    const resp = await this.Grados_Rep.find();
    return resp;
  }
}
