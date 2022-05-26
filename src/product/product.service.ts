import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class ProductService {

//classe: tem atributos e metodos

  //products:product[]=[];//esta vindo do product.entities--- é um atributo de product

  constructor(private readonly prisma: PrismaService) {}

  findAll():Promise<Product[]>{
    return this.prisma.product.findMany();
  }

  async findOne(id:string): Promise<Product>{
    const record= await this.prisma.product.findUnique({where:{id}})

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;

  }

  create(createproductDto:CreateProductDto):Promise<Product>{
    const data: Product = { ...createproductDto };//antes: const product: product

    return this.prisma.product.create({
      data,//antes:  data:product--- como no this ja esta recebendo e na linha 20 ja esta recebendo a tabela fica mais simples assim
    }).catch(handleError);

  }

  async update(id:string,dto:UpdateProductDto):Promise<Product>{

    await this.findOne(id);

    const data:Partial<Product> = {... dto};

    return this.prisma.product.update({
      where:{id},
      data,
    });
  }

  async delete(id:string){

    await this.findOne(id);

    await this.prisma.product.delete({
      where:{id}
    });
  }


}
