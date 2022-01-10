import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class Name {
  @ApiProperty({ required: true, example: 'John Doe' })
  @IsString()
  artistName: string;
}

export class NameGetResponseDto {
  @ApiProperty({ type: () => Name })
  name: Name;
}
