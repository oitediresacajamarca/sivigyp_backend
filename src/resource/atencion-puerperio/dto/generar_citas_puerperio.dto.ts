import { IsNumber } from 'class-validator';

export class GenerarCitasPuerperioDto {
  @IsNumber()
  ID_ATENCION_PARTO: number;
}
