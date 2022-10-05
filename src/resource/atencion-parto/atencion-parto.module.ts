import { Module } from '@nestjs/common';
import { AtencionPartoService } from './atencion-parto.service';
import { AtencionPartoController } from './atencion-parto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionPartoEntity } from './entities/atencion-parto.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { PersonaEntity } from 'src/comunes/entidades/persona.entity';
import { Nacimiento } from '../nacimiento/entities/nacimiento.entity';

@Module({
  controllers: [AtencionPartoController],
  providers: [AtencionPartoService],
  imports: [
    TypeOrmModule.forFeature(
      [AtencionPartoEntity, AtencionEntity, PersonaEntity, Nacimiento],
      'db_svgyp',
    ),
  ],
})
export class AtencionPartoModule {}
