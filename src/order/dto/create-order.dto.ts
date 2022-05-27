import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreateOrderDto {

  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '73dffe89-a5bc-4e5e-a939-9c6a267163ca',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que está realizando o pedido',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    example:
      '["1c51e725-2063-4714-80e9-9ad9fef2f5a8", "c92d5c9d-10e8-4003-8dea-0c8a4d4798e7"]',
  })
  products: string[];

}
