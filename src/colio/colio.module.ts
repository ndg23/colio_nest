import { Module } from '@nestjs/common';
import { ColioService } from './colio.service';
import { ColioController } from './colio.controller';

@Module({
  controllers: [ColioController],
  providers: [ColioService],
})
export class ColioModule {}
