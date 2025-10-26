import { Module } from '@nestjs/common';
import { CpusService } from './cpus.service';
import { CpusController } from './cpus.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CpusController],
  providers: [CpusService],
})
export class CpusModule {}