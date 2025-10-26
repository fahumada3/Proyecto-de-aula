import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete } from '@nestjs/common';
import { CpusService } from './cpus.service';

@Controller('api/v1/cpus')
export class CpusController {
  constructor(private readonly cpusService: CpusService) {}

  @Get()
  all() {
    return this.cpusService.findAll();
  }

  @Get('vendor/:vendor')
  byVendor(@Param('vendor') vendor: string) {
    return this.cpusService.findByVendor(vendor);
  }

  @Get(':id')
  one(@Param('id', ParseIntPipe) id: number) {
    return this.cpusService.findOne(id);
  }

  @Post()
  create(@Body() body: { vendor: string; model: string; year: number; cores: number; threads: number }) {
    return this.cpusService.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cpusService.remove(id);
  }
}