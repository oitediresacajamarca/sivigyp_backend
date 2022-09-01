import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistritosEntity } from 'src/comunes/entidades/distritos.entity';
import { HistoriaClinicaEntity } from 'src/comunes/entidades/historia-clinica.entity';
import { IpressEntity } from 'src/comunes/entidades/ipress.entity';
import { PersonaEntity } from 'src/comunes/entidades/persona.entity';
import { ProvinciasEntity } from 'src/comunes/entidades/provincias.entity';
import { GestanteController } from './gestante.controller';

@Module({
  controllers: [GestanteController],
  imports: [
    TypeOrmModule.forFeature(
      [
        PersonaEntity,
        HistoriaClinicaEntity,
        IpressEntity,
        IpressEntity,
        ProvinciasEntity,
        DistritosEntity,
      ],
      'db_svgyp',
    ),
  ],
})
export class GestanteModule {}
