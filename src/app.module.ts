import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamesModule } from './names/names.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'name',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NamesModule,
  ],
})
export class AppModule {}
