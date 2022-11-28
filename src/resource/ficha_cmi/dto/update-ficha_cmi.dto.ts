import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaCmiDto } from './create-ficha_cmi.dto';

export class UpdateFichaCmiDto extends PartialType(CreateFichaCmiDto) {}
