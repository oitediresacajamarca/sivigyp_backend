import { IsOptional, IsString } from "class-validator";

export class CreateAtencionPuerperioDto {
    @IsString()
    @IsOptional()
    fecha_confirmacion_gestacion: Date;
    @IsString()
    fecha_probable_parto: Date;
}
