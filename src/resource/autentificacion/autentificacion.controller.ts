import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AutentificacionService } from './autentificacion.service';
import { CreateAutentificacionDto } from './dto/create-autentificacion.dto';
import { login_dto } from './dto/login.dto';
import { UpdateAutentificacionDto } from './dto/update-autentificacion.dto';

@Controller('autentificacion')
export class AutentificacionController {
  constructor(
    private readonly autentificacionService: AutentificacionService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Body() createAutentificacionDto: login_dto) {
    return createAutentificacionDto;
  }

  @Post()
  create(@Body() createAutentificacionDto: CreateAutentificacionDto) {
    return this.autentificacionService.create(createAutentificacionDto);
  }

  @Get()
  findAll() {
    return this.autentificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autentificacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAutentificacionDto: UpdateAutentificacionDto,
  ) {
    return this.autentificacionService.update(+id, updateAutentificacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autentificacionService.remove(+id);
  }
}
