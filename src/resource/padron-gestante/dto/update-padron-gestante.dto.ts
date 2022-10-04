import { PartialType } from '@nestjs/mapped-types';
import { CreatePadronGestanteDto } from './create-padron-gestante.dto';

export class UpdatePadronGestanteDto extends PartialType(CreatePadronGestanteDto) {}
