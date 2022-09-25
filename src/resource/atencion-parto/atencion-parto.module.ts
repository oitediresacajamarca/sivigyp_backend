import { Module } from '@nestjs/common';
import { AtencionPartoService } from './atencion-parto.service';
import { AtencionPartoController } from './atencion-parto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionPartoEntity } from './entities/atencion-parto.entity';

@Module({
  controllers: [AtencionPartoController],
  providers: [AtencionPartoService],
  imports: [TypeOrmModule.forFeature([AtencionPartoEntity], 'db_svgyp')],
})
export class AtencionPartoModule {}
