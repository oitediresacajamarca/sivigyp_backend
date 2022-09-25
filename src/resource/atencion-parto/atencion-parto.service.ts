import { Injectable } from '@nestjs/common';
import { CreateAtencionPartoDto } from './dto/create-atencion-parto.dto';
import { UpdateAtencionPartoDto } from './dto/update-atencion-parto.dto';

@Injectable()
export class AtencionPartoService {
  constructor() {}
  create(createAtencionPartoDto: CreateAtencionPartoDto) {
    return 'This action adds a new atencionParto';
  }

  findAll() {
    return `This action returns all atencionParto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} atencionParto`;
  }

  update(id: number, updateAtencionPartoDto: UpdateAtencionPartoDto) {
    return `This action updates a #${id} atencionParto`;
  }

  remove(id: number) {
    return `This action removes a #${id} atencionParto`;
  }
}
