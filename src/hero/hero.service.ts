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
}
