import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CpusService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.cpu.findMany({ orderBy: { id: 'asc' } });
  }

  findByVendor(vendor: string) {
    return this.prisma.cpu.findMany({
      where: { vendor: { equals: vendor, mode: 'insensitive' } },
      orderBy: { year: 'desc' },
    });
  }

  async findOne(id: number) {
    const cpu = await this.prisma.cpu.findUnique({ where: { id } });
    if (!cpu) throw new NotFoundException('CPU not found');
    return cpu;
  }

  create(data: { vendor: string; model: string; year: number; cores: number; threads: number }) {
    return this.prisma.cpu.create({ data });
  }

  async remove(id: number) {
    await this.findOne(id); // ensure exists
    return this.prisma.cpu.delete({ where: { id } });
  }
}