import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [TableService],
  controllers: [TableController]
})
export class TableModule {}
