import { Module } from '@nestjs/common';
import { AtencionPartoService } from './atencion-parto.service';
import { AtencionPartoController } from './atencion-parto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionPartoEntity } from './entities/atencion-parto.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { PersonaEntity } from 'src/comunes/entidades/persona.entity';

@Module({
  controllers: [AtencionPartoController],
  providers: [AtencionPartoService],
  imports: [
    TypeOrmModule.forFeature(
      [AtencionPartoEntity, AtencionEntity, PersonaEntity],
      'db_svgyp',
    ),
  ],
})
export class AtencionPartoModule {}
