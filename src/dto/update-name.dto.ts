import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class NameUpdateResponseDto {
  @ApiProperty({ required: true, example: 'John Doe' })
  @IsString()
  artistName: string;
}
