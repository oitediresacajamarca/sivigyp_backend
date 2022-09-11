import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MstPacienteEntity } from 'src/comunes/entidades/mst_paciente.entity';
import { Repository } from 'typeorm';

@Controller('persona-risc')
export class PersonaRiscController {
  constructor(
    @InjectRepository(MstPacienteEntity, 'risc_2030')
    private Persona_rep: Repository<MstPacienteEntity>,
  ) {}

  @Get(':numero_documento')
  devolver_msp(@Param('numero_documento') numero_documento: string) {
    const per = this.Persona_rep.findOne({
      where: { numero_documento: numero_documento },
    });
    return per;
  }
}
