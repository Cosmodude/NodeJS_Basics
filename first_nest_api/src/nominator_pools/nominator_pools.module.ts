import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NominatorPoolsController } from './nominator_pools.controller';
import { NominatorPoolsService } from './nominator_pools.service';
import { Pool } from './pool.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Pool])],
  controllers: [NominatorPoolsController],
  providers: [NominatorPoolsService],
})
export class NominatorPoolsModule {}
