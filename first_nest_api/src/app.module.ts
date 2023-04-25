import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominatorPoolsModule } from './nominator_pools/nominator_pools.module';

@Module({
  imports: [NominatorPoolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
