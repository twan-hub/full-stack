import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NamePostResponseDto } from 'src/dto/create-name.dto';
import { NameGetResponseDto } from 'src/dto/get-name.dto';
import { NameUpdateResponseDto } from 'src/dto/update-name.dto';
import { Repository } from 'typeorm';
import { Name } from './names.entity';

@Injectable()
export class NameService {
  constructor(
    @InjectRepository(Name) private namesRepository: Repository<Name>,
  ) {}

  async createName(name: NamePostResponseDto) {
    await this.namesRepository.save(name);
    return name;
  }

  async getUser(_id: any) {
    return await this.namesRepository.findOne(_id);
  }

  async findAll() {
    return this.namesRepository.find();
  }

  async updateName(params: string, name: NameUpdateResponseDto) {
    const nameId = await this.namesRepository.findOne(params);
    await this.namesRepository.update({ id: nameId.id }, name);
    return await this.namesRepository.findOne(params);
  }

  async remove(param: string) {
    return await this.namesRepository.delete(param);
  }
}
