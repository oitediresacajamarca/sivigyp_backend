import { PartialType } from '@nestjs/mapped-types';
import { CreateAtencionPuerperioDto } from './create-atencion-puerperio.dto';

export class UpdateAtencionPuerperioDto extends PartialType(CreateAtencionPuerperioDto) {}
