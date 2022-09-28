import { Module } from '@nestjs/common';
import { RiesgosService } from './riesgos.service';
import { RiesgosController } from './riesgos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiesgosEntity } from 'src/comunes/entidades/riesgos.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';

@Module({
  controllers: [RiesgosController],
  providers: [RiesgosService],
  imports: [
    TypeOrmModule.forFeature([RiesgosEntity, AtencionEntity], 'db_svgyp'),
  ],
})
export class RiesgosModule {}
