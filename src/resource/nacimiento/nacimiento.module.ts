import { Module } from '@nestjs/common';
import { NacimientoService } from './nacimiento.service';
import { NacimientoController } from './nacimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nacimiento } from './entities/nacimiento.entity';

@Module({
  controllers: [NacimientoController],
  providers: [NacimientoService],
  imports: [TypeOrmModule.forFeature([Nacimiento], 'db_svgyp')],
})
export class NacimientoModule {}
