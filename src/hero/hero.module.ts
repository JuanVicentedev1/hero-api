import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  providers: [HeroService, PrismaService],
  controllers: [HeroController],
})
export class HeroModule {}
