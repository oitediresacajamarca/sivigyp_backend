import { Type } from 'class-transformer';
import { isNumber, IsNumber, IsString, ValidateNested } from 'class-validator';

export class CreateAtencionPartoDto {
  @IsNumber()
  @Type(() => Number)
  ID_ATENCION_PARTO: number;
  @IsNumber()
  @Type(() => Number)
  ID_ATENCION: number;
  @IsString()
  FECHA_PARTO: Date;
  @IsString()
  HORA_PARTO: string;
  @IsNumber()
  @Type(() => Number)
  TIPO_PARTO: number;
  @IsString()
  TIPO_LUGAR_PARTO: string;

  @IsString()
  LUGAR_PARTO: string;
  @IsNumber()
  @Type(() => Number)
  ID_ATENDIO_PARTO: number;
  @IsNumber()
  @Type(() => Number)
  TIPO_RECIEN_NACIDO: number;
  @IsNumber()
  @Type(() => Number)
  RN_VIVO: number;
  @IsNumber()
  @Type(() => Number)
  RN_SEXO: number;
  @IsNumber()
  @Type(() => Number)
  RN_PESO: number;
  @IsString()
  USU: string;
  @IsString()
  FEC_REGISTRO: Date;
  @IsNumber()
  @Type(() => Number)
  EDAD_GESTACIONAL: number;

  @ValidateNested({ each: true })
  @Type(() => CreateNacimientoDto)
  NACIMIENTOS: CreateNacimientoDto[];
}

class CreateNacimientoDto {
  @IsNumber()
  @Type(() => Number)
  RN_VIVO: number;

  @IsNumber()
  @Type(() => Number)
  RN_SEXO: number;

  @IsNumber()
  @Type(() => Number)
  RN_PESO: number;
}
