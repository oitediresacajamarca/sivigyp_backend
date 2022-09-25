import { Type } from 'class-transformer';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class NuevoPacienteDto {
  @IsString()
  nro_documento: string;
  @IsString()
  nombres: string;
  @IsString()
  apellido_paterno: string;
  @IsString()
  apellido_materno: string;
  @IsString()
  fecha_nacimiento: Date;
  @IsString()
  provincia: string;
  @IsString()
  distrito: string;
  @IsString()
  centro_poblado: string;
  @IsString()
  direccion: string;
  @IsString()
  @IsEmail()
  correo: string;
  @IsString()
  numero_telefono: string;
  @IsString()
  numero_telefono_adicional: string;
  @IsNumber()
  @Type(() => Number)
  beneficiaria_juntos: number;
  @IsString()
  COD_IPRESS: string;
}
