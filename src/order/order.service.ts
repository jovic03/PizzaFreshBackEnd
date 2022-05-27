import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor (private readonly prisma: PrismaService){}


  create(createOrderDto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      user:{
        connect:{
          id:createOrderDto.userId
        }
      },
      Table:{
        connect:{
          number:createOrderDto.tableNumber,
        },
      },
      products:{
        connect:createOrderDto.products.map(ProductId =>({
          id:ProductId
        })),
      },

    };

    return this.prisma.order.create({
      data,
      select:{
        id:true,
        Table:{
          select:{
            number:true
          }
        },
        user:{
          select:{
            name:true
          }
        },
        products:{
          select:{
            name:true,
          }
        }
      }
    }).catch(handleError)
  }

  findAll() {
    return this.prisma.order.findMany({
      select:{
        id:true,
        Table:{
          select:{
            number:true,
          },
        },
        user:{
          select:{
            name:true,
          },
        },
        _count:{
          select:{
            products:true,
          }
        }

      }
    }
    );
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        Table: {
          select: {
            number: true,
          },
        },
        products: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
            description: true,
          },
        },
      },
    });
  }

}
