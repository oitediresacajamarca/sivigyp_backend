import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroPobladoEntity } from 'src/comunes/entidades/centro-poblado.entity';

import { DistritosEntity } from 'src/comunes/entidades/distritos.entity';
import { GradoInstruccionEntity } from 'src/comunes/entidades/grado-instruccion.entity';
import { MstPacienteEntity } from 'src/comunes/entidades/mst_paciente.entity';
import { ProvinciasEntity } from 'src/comunes/entidades/provincias.entity';
import { DistribucionGeograficaController } from './distribucion-geografica/distribucion-geografica.controller';
import { GradoInstruccionController } from './grado-instruccion/grado-instruccion.controller';
import { PersonaRiscController } from './persona/persona_risc/persona_risc.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        ProvinciasEntity,
        DistritosEntity,
        CentroPobladoEntity,
        GradoInstruccionEntity,
      ],
      'db_svgyp',
    ),
    TypeOrmModule.forFeature([MstPacienteEntity], 'risc_2030'),
  ],
  controllers: [
    DistribucionGeograficaController,
    PersonaRiscController,
    GradoInstruccionController,
  ],
  exports: [],
})
export class MaestrosModule {}
