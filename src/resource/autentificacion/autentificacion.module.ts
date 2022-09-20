import { Module } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/comunes/entidades/usuario.entity';
import { LocalStrategy } from './login.strategy';

@Module({
  controllers: [AutentificacionController],
  providers: [AutentificacionService, LocalStrategy],
  imports: [TypeOrmModule.forFeature([UsuarioEntity], 'db_svgyp')],
})
export class AutentificacionModule {}
