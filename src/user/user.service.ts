import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

//classe: tem atributos e metodos

private userSelect = {
    id: true,
    nickname: true,
    name: true,
    password: false,
    image: true,
    createdAt: true,
    updatedAt: true,

}

  constructor(private readonly prisma: PrismaService) {}

  findAll():Promise<User[]>{
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findOne(id:string): Promise<User>{
    const record= await this.prisma.user.findUnique({
      where:{id},
      select: this.userSelect,
    })

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;

  }

  async create(createUserDto:CreateUserDto):Promise<User>{

    if(createUserDto.password != createUserDto.confirmPassword){
      throw new BadRequestException('As senhas informadas não são iguais.')
    }

    delete createUserDto.confirmPassword;

    const data: User = {
      ...createUserDto,
      password:await bcrypt.hash(createUserDto.password,10)
    };//antes: const user: user

    return this.prisma.user.create({
      data,//antes:  data:user--- como no this ja esta recebendo e na linha 20 ja esta recebendo a tabela fica mais simples assim
      select:this.userSelect,
    }).catch(this.handleError);

  }

  async update(id:string,dto:UpdateUserDto):Promise<User>{

    await this.findOne(id);
    if(dto.password){
      if(dto.password != dto.confirmPassword){
        throw new BadRequestException('As senhas informadas não são iguais.')
      }
    }

    delete dto.confirmPassword;

    const data:Partial<User> = {... dto};

    if(data.password){
      data.password = await bcrypt.hash(data.password,10)
    }

    return this.prisma.user.update({
      where:{id},
      data,
      select:this.userSelect,
    });
  }

  async delete(id:string){

    await this.findOne(id);

    await this.prisma.user.delete({
      where:{id}
    });
  }

  handleError(error: Error):undefined{

    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length-1]?.trim();

    if (!lastErrorLine) {
      console.error(error);
    }

    throw new UnprocessableEntityException(lastErrorLine ||
       'Algum erro ocorreu ao executar a operação',);
  }

}
