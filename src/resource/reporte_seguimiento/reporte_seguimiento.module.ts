import { Module } from '@nestjs/common';
import { ReporteSeguimientoService } from './reporte_seguimiento.service';
import { ReporteSeguimientoController } from './reporte_seguimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { ReporteSeguimiento } from './entities/reporte_seguimiento.entity';
import { AtencionRegSemanaEntity } from './entities/atencion-reg-semana.entity';
import { AtencionesPpffEntity } from 'src/comunes/entidades/atenciones_ppff.entity/atenciones_ppff.entity';

@Module({
  controllers: [ReporteSeguimientoController],
  providers: [ReporteSeguimientoService],
  imports: [
    TypeOrmModule.forFeature([PadronGestanteHisEntity], 'BDHIS_MINSA'),
    TypeOrmModule.forFeature(
      [AtencionEntity, ReporteSeguimiento, AtencionRegSemanaEntity,AtencionesPpffEntity],
      'db_svgyp',
    ),
  ],
})
export class ReporteSeguimientoModule {}
