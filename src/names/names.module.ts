import { Module } from '@nestjs/common';
import { NameService } from './names.service';
import { NamesController } from './names.controller';
import { Name } from './names.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Name])],
  providers: [NameService],
  controllers: [NamesController],
})
export class NamesModule {}
