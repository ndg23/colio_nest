import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColioService } from './colio.service';
import { CreateColioDto } from './dto/create-colio.dto';
import { UpdateColioDto } from './dto/update-colio.dto';

@Controller('colio')
export class ColioController {
  constructor(private readonly colioService: ColioService) {}

  @Post()
  create(@Body() createColioDto: CreateColioDto) {
    return this.colioService.create(createColioDto);
  }

  @Get()
  findAll() {
    return this.colioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColioDto: UpdateColioDto) {
    return this.colioService.update(+id, updateColioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colioService.remove(+id);
  }
}
