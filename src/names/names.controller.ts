import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Req,
  SetMetadata,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiBody,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { NamePostResponseDto } from 'src/dto/create-name.dto';
import { NameGetResponseDto } from 'src/dto/get-name.dto';
import { NameUpdateResponseDto } from 'src/dto/update-name.dto';
import { Name } from './names.entity';
import { NameService } from './names.service';

@Controller('names')
export class NamesController {
  constructor(private readonly nameService: NameService) {}

  @Post()
  async createUser(
    @Body() name: NamePostResponseDto,
  ): Promise<NamePostResponseDto> {
    return await this.nameService.createName(name);
  }

  @Get(':id')
  get(@Param('id') params: string) {
    return this.nameService.getUser(params);
  }

  @Put(':id')
  async updateUser(
    @Param('id') params: string,
    @Body() name: NameUpdateResponseDto,
  ): Promise<NamePostResponseDto> {
    return await this.nameService.updateName(params, name);
  }

  @Delete(':id')
  async inactiveUser(@Param('id') param: string) {
    return await this.nameService.remove(param);
  }
}
