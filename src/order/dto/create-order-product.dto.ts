import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do produto',
    example: '1c51e725-2063-4714-80e9-9ad9fef2f5a8',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens no pedido',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Sem cebola',
  })
  description: string;
}
