import { PartialType } from '@nestjs/mapped-types';
import { CreateReporteSeguimientoDto } from './create-reporte_seguimiento.dto';

export class UpdateReporteSeguimientoDto extends PartialType(CreateReporteSeguimientoDto) {}
