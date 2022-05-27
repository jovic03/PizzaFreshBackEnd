import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive, IsUUID, ValidateNested } from "class-validator";
import { CreateOrderProductDto } from './create-order-product.dto';


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

  @ValidateNested({
    each:true,
  })
  @Type(()=>CreateOrderProductDto)
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    type:[CreateOrderProductDto]
  })
  products: CreateOrderProductDto[];

}
