import { Test, TestingModule } from '@nestjs/testing';
import { ColioService } from './colio.service';

describe('ColioService', () => {
  let service: ColioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColioService],
    }).compile();

    service = module.get<ColioService>(ColioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
