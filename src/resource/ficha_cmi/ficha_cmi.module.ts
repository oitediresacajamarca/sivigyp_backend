import { Module } from '@nestjs/common';
import { FichaCmiService } from './ficha_cmi.service';
import { FichaCmiController } from './ficha_cmi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaCmi } from './entities/ficha_cmi.entity';

@Module({
  controllers: [FichaCmiController],
  providers: [FichaCmiService],
  imports:[TypeOrmModule.forFeature([FichaCmi],'BDHIS_MINSA')]
})
export class FichaCmiModule {}
