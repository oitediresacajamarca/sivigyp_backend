import { Injectable } from '@nestjs/common';
import { CreateNacimientoDto } from './dto/create-nacimiento.dto';
import { UpdateNacimientoDto } from './dto/update-nacimiento.dto';

@Injectable()
export class NacimientoService {
  create(createNacimientoDto: CreateNacimientoDto) {
    return 'This action adds a new nacimiento';
  }

  findAll() {
    return `This action returns all nacimiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nacimiento`;
  }

  update(id: number, updateNacimientoDto: UpdateNacimientoDto) {
    return `This action updates a #${id} nacimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} nacimiento`;
  }
}
