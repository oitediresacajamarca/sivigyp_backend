import { HttpService } from '@nestjs/axios';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MstPacienteEntity } from 'src/comunes/entidades/mst_paciente.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Controller('persona-risc')
export class PersonaRiscController {
  constructor(
    @InjectRepository(MstPacienteEntity, 'risc_2030')
    private Persona_rep: Repository<MstPacienteEntity>,
    private readonly httpService: HttpService,
  ) {}

  @Get(':numero_documento')
  async devolver_msp(@Param('numero_documento') numero_documento: string) {
    let per = await this.Persona_rep.findOne({
      where: { numero_documento: numero_documento },
    });
    console.log(per);

    if (per == null) {
      const busc = await this.buscar_en_api_reniec(numero_documento);
      per = this.Persona_rep.create({
        nombres: busc.nombres,
        apellido_paterno: busc.apellidoPaterno,
        apellido_materno: busc.apellidoMaterno,
      });
      return per;
    }

    if (per == null) {
      throw new NotFoundException('no se encontro numero de documento');
    }

    return per;
  }

  async buscar_en_api_reniec(numero_documento: string) {
    const resp = await axios.get<any>(
      'http://datos.maxlimhoteleria.com/?dir=1&numero=' + numero_documento,
    );

    if (resp.data.codVerifica == 1) {
      return resp.data;
    } else {
      throw new NotFoundException('no se encontro numero de documento');
    }

    return resp.data;
  }
}
