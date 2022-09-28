import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';

export class AsignarRiesgoDto {
  @ValidateNested({ each: true })
  @Type(() => Riesgo)
  RIESGOS: Riesgo[];
}

export class Riesgo {
  @IsNumber()
  @Type(() => Number)
  ID_RIESGO: number;
  @IsOptional()
  NOMBRE: string;
}
