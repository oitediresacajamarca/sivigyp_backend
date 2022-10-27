import { PartialType } from '@nestjs/mapped-types';
import { CreateMultisectorialHechoDto } from './create-multisectorial-hecho.dto';

export class UpdateMultisectorialHechoDto extends PartialType(CreateMultisectorialHechoDto) {}
