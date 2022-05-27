import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Module({
  providers: [PrismaService],
  exports: [PrismaService],//vai permitir ser chamado em outros lugar no codigo pra acionar o BD
})
export class PrismaModule {}
