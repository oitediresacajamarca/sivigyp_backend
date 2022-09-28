import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UsuarioEntity } from 'src/comunes/entidades/usuario.entity';
import { Repository } from 'typeorm';
import { CreateAutentificacionDto } from './dto/create-autentificacion.dto';
import { login_dto } from './dto/login.dto';
import { UpdateAutentificacionDto } from './dto/update-autentificacion.dto';

@Injectable()
export class AutentificacionService {
  constructor(
    @InjectRepository(UsuarioEntity, 'db_svgyp')
    private login_rep: Repository<UsuarioEntity>,
  ) {}
  create(createAutentificacionDto: CreateAutentificacionDto) {
    return 'This action adds a new autentificacion';
  }
  async login(data: login_dto) {
    const estado_login = await this.login_rep.findOne({
      where: { LOGIN: data.user, PASSWORD: data.password },
    });

    if (estado_login) {
      return { user: estado_login.LOGIN, password: estado_login.PASSWORD };
    } else {
      return null;
    }
  }

  findAll() {
    return `This action returns all autentificacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autentificacion`;
  }

  update(id: number, updateAutentificacionDto: UpdateAutentificacionDto) {
    return `This action updates a #${id} autentificacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} autentificacion`;
  }
}
