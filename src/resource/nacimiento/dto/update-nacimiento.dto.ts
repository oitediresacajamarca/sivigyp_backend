import { PartialType } from '@nestjs/mapped-types';
import { CreateNacimientoDto } from './create-nacimiento.dto';

export class UpdateNacimientoDto extends PartialType(CreateNacimientoDto) {}
