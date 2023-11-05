import { Test, TestingModule } from '@nestjs/testing';
import { ColioController } from './colio.controller';
import { ColioService } from './colio.service';

describe('ColioController', () => {
  let controller: ColioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColioController],
      providers: [ColioService],
    }).compile();

    controller = module.get<ColioController>(ColioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
