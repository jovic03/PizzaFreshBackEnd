import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags , ApiOperation} from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('status')
@Controller()
export class AppController {//private pois ninguem vai poder chamar e appcontroller e 'somente para leitura'
  constructor(private readonly appService: AppService) {}


  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação com a URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */
  @Get()
  @ApiOperation({summary: 'Visualizar status da aplicação'})
  getAppStatus(@Req() req: Request) {

    const baseUrl = req.protocol + '://'+req.get('host')

    return this.appService.getAppStatus(baseUrl);
  }
}
