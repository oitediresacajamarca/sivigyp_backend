import { PartialType } from '@nestjs/mapped-types';
import { CreateAtencionRegDto } from './create-atencion-reg.dto';

export class UpdateAtencionRegDto extends PartialType(CreateAtencionRegDto) {}
