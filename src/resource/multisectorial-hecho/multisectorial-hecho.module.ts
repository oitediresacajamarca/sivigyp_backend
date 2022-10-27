import { Module } from '@nestjs/common';
import { MultisectorialHechoService } from './multisectorial-hecho.service';
import { MultisectorialHechoController } from './multisectorial-hecho.controller';
import { HisHechoMultisectorialEntity } from 'src/comunes/entidades/his-hecho-multisectorial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RptCbetaNinioEntity } from 'src/comunes/entidades/rpt-cbeta-ninio.entity';

@Module({
  controllers: [MultisectorialHechoController],
  providers: [MultisectorialHechoService],
  imports: [
    TypeOrmModule.forFeature([HisHechoMultisectorialEntity], 'MULTISECTORIAL'),
    TypeOrmModule.forFeature([RptCbetaNinioEntity], 'BDHIS_MINSA'),
  ],
})
export class MultisectorialHechoModule {}
