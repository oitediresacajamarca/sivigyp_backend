import { IsString } from 'class-validator';
import { IsNumber, Min, IsOptional } from 'class-validator';

export class InformacionGestanteDto {
  @IsString()
  fecha_registro: Date;
  @IsString()
  fecha_atencion_prenatal: Date;
  @IsString()
  fecha_ultima_regla: Date;
  @IsNumber()
  @Min(0)
  numero_gestaciones: number;
  @IsNumber()
  @Min(0)
  recien_nacidos_termino: number;
  @IsNumber()
  @Min(0)
  recien_nacidos_prematuros: number;
  @IsNumber()
  @Min(0)
  numero_abortos: number;
  @IsNumber()
  @Min(0)
  numero_hijos_vivos: number;
  @IsString()
  @IsOptional()
  observaciones: string;
}
