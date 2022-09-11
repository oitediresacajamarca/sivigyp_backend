import { IsOptional } from 'class-validator';

export class PaginacionDto {
  @IsOptional()
  limit = 7;
  @IsOptional()
  skip = 1;
}
