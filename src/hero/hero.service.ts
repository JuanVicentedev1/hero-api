import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeroDto } from './dto/hero.dto';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}
  // criar uma DTO aqui que está no BANCO, o que o usuário vai mnadar
  async create(data: HeroDto) {
    const hero = await this.prisma.hero.create({
      data,
    });

    return hero;
  }

  async findeAll() {
    return await this.prisma.hero.findMany(); // pegar tudo que esta no banco
  }

  async update(id: number, data: HeroDto) {
    const heroExists = await this.prisma.hero.findUnique({
      where: {
        id,
      },
    });

    if (!heroExists) {
      throw new Error('Heroi não encontrado!!');
    }
    return await this.prisma.hero.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const heroExists = await this.prisma.hero.findUnique({
      where: {
        id,
      },
    });

    if (!heroExists) {
      throw new Error('Heroi não encontrado!!');
    }

    return await this.prisma.hero.delete({
      where: {
        id,
      },
    });
  }

  async GetById(id: number) {
    const heroExists = await this.prisma.hero.findUnique({
      where: {
        id,
      },
    });

    if (!heroExists) {
      throw new Error('Heroi não encontrado!!');
    }

    return heroExists;
  }
}
