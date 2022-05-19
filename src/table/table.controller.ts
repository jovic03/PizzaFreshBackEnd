import { Body, Controller, Get, Post } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entities';

@Controller('table')
export class TableController {

  constructor(private tableService: TableService){}

  @Get()
  findAll():Table[]{
    return this.tableService.findAll()
  }

  @Post()
  create(@Body() createTableDto:CreateTableDto):Table {
    return this.tableService.create(createTableDto);
  }

}
