import { Module } from '@nestjs/common';
import { NamesService } from './names.service';
import { NamesController } from './names.controller';

@Module({
  providers: [NamesService],
  controllers: [NamesController]
})
export class NamesModule {}
