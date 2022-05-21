import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags , ApiOperation} from '@nestjs/swagger';

@ApiTags('status')
@Controller()
export class AppController {//private pois ninguem vai poder chamar e appcontroller e 'somente para leitura'
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: 'Visualizar status da aplicação'})
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
