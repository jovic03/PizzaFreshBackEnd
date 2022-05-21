import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entities';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TableService {

//classe: tem atributos e metodos

  //tables:Table[]=[];//esta vindo do table.entities--- é um atributo de Table

  constructor(private readonly prisma: PrismaService) {}

  findAll():Promise<Table[]>{
    return this.prisma.table.findMany();
  }

  async findOne(id:string): Promise<Table>{
    const record= await this.prisma.table.findUnique({where:{id}})

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;

  }

  create(createTableDto:CreateTableDto):Promise<Table>{
    const data: Table = { ...createTableDto };//antes: const table: Table

    return this.prisma.table.create({
      data,//antes:  data:table--- como no this ja esta recebendo e na linha 20 ja esta recebendo a tabela fica mais simples assim
    }).catch(this.handleError);

  }

  handleError(error: Error){
    console.log(error.message);

    return undefined;
  }


  async update(id:string,dto:UpdateTableDto):Promise<Table>{

    await this.findOne(id);

    const data:Partial<Table> = {... dto};

    return this.prisma.table.update({
      where:{id},
      data,
    });
  }

  async delete(id:string){

    await this.findOne(id);

    await this.prisma.table.delete({
      where:{id}
    });
  }

}
