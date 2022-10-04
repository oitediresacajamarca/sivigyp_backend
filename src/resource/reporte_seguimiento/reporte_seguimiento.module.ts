import { Module } from '@nestjs/common';
import { ReporteSeguimientoService } from './reporte_seguimiento.service';
import { ReporteSeguimientoController } from './reporte_seguimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';

@Module({
  controllers: [ReporteSeguimientoController],
  providers: [ReporteSeguimientoService],
  imports: [
    TypeOrmModule.forFeature([PadronGestanteHisEntity], 'BDHIS_MINSA'),
    TypeOrmModule.forFeature([AtencionEntity], 'db_svgyp'),
  ],
})
export class ReporteSeguimientoModule {}
