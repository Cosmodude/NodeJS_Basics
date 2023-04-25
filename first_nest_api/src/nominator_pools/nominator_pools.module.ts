import { Module } from '@nestjs/common';
import { NominatorPoolsController } from './nominator_pools.controller';
import { NominatorPoolsService } from './nominator_pools.service';

@Module({
  controllers: [NominatorPoolsController],
  providers: [NominatorPoolsService]
})
export class NominatorPoolsModule {}
