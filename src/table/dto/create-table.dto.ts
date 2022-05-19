import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';//

export class CreateTableDto{
  @IsNumber()
  @IsPositive({message:'Numero deve ser positivo'})
  @ApiProperty({
    description: 'O número da mesa',
    example: 1,
  })
  number: number;
}
