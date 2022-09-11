import { IsString } from 'class-validator';

export class DatosParaGestacionDto {
  @IsString()
  fecha_confirmacion_gestacion: Date;
  @IsString()
  fecha_probable_parto: Date;
}
