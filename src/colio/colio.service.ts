import { Injectable } from '@nestjs/common';
import { CreateColioDto } from './dto/create-colio.dto';
import { UpdateColioDto } from './dto/update-colio.dto';

@Injectable()
export class ColioService {
  create(createColioDto: CreateColioDto) {
    return 'This action adds a new colio';
  }

  findAll() {
    return `This action returns all colio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colio`;
  }

  update(id: number, updateColioDto: UpdateColioDto) {
    return `This action updates a #${id} colio`;
  }

  remove(id: number) {
    return `This action removes a #${id} colio`;
  }
}
