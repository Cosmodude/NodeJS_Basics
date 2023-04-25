import { Test, TestingModule } from '@nestjs/testing';
import { NominatorPoolsService } from './nominator_pools.service';

describe('NominatorPoolsService', () => {
  let service: NominatorPoolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NominatorPoolsService],
    }).compile();

    service = module.get<NominatorPoolsService>(NominatorPoolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
