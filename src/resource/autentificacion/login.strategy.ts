import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AutentificacionService } from './autentificacion.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AutentificacionService) {
    super({ usernameField: 'user' });
  }

  async validate(user: string, password: string): Promise<any> {
    const userb = await this.authService.login({
      user: user,
      password: password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    return userb;
  }
}
