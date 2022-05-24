import { Body, Controller, Get, Post , Put, Delete, Param, Patch, HttpCode, HttpStatus} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entities';
import { ApiTags , ApiOperation} from '@nestjs/swagger';
import { UpdateTableDto } from './dto/update-table.dto';

@ApiTags('table')
@Controller('table')
export class TableController {

  constructor(private tableService: TableService){}

  @Get()
  @ApiOperation({summary:'listar todas as mesas'})
  findAll(): Promise<Table[]>{
    return this.tableService.findAll()
  }

  @Get(':id')
  @ApiOperation({summary:'vizualizar uma mesa'})
  findOne(@Param('id') id:string): Promise<Table>{
    return this.tableService.findOne(id);
  }


  @Post()
  @ApiOperation({summary:'criar uma mesa'})
  create(@Body() createTableDto:CreateTableDto): Promise<Table> {
    return this.tableService.create(createTableDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar/Editar uma mesa pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta uma mesa pelo ID',
  })
  delete(@Param('id') id: string) {
    this.tableService.delete(id);
  }

}
