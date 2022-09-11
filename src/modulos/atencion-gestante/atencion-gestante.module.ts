import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { HistoriaClinicaEntity } from 'src/comunes/entidades/historia-clinica.entity';
import { AtencionGestanteController } from './atencion-gestante/atencion-gestante.controller';

@Module({
  controllers: [AtencionGestanteController],
  imports: [
    TypeOrmModule.forFeature(
      [AtencionEntity, HistoriaClinicaEntity],
      'db_svgyp',
    ),
  ],
})
export class AtencionGestanteModule {}
