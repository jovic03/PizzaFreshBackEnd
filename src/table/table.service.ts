import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entities';

@Injectable()
export class TableService {

//classe: tem atributos e metodos

  tables:Table[]=[];//esta vindo do table.entities--- é um atributo de Table

  findAll():Table[]{
    return this.tables;
  }

  create(createTableDto:CreateTableDto):Table{
    const table: Table = {
      id:'id_aletorio',...createTableDto
    };
    this.tables.push(table);
    return table;
  }

}
