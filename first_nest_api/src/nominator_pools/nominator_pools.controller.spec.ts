import { Test, TestingModule } from '@nestjs/testing';
import { NominatorPoolsController } from './nominator_pools.controller';

describe('NominatorPoolsController', () => {
  let controller: NominatorPoolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NominatorPoolsController],
    }).compile();

    controller = module.get<NominatorPoolsController>(NominatorPoolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
