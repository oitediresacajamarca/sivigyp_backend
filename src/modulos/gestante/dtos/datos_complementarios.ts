import { Type } from 'class-transformer';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class DatosComplementarios {
  @IsNumber()
  @Type(() => Number)
  grado_instruccion: number;
  @IsString()
  idioma: string;
  @IsString()
  religion: string;
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(5)
  estado_civil: number;
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(5)
  tipo_seguro: number;

  @IsString()
  grupo_sanguineo: string;
  @IsString()
  factor_sanguineo: string;
}
