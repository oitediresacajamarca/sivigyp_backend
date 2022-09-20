import { IsString } from 'class-validator';
export class login_dto {
  @IsString()
  user: string;
  @IsString()
  password: string;
}
