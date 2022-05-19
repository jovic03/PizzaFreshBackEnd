import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {//private pois ninguem vai poder chamar e appcontroller e 'somente para leitura'
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
