import { PartialType } from '@nestjs/mapped-types';
import { CreateAtencionPartoDto } from './create-atencion-parto.dto';

export class UpdateAtencionPartoDto extends PartialType(CreateAtencionPartoDto) {}
