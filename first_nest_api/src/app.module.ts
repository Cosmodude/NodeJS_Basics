import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominatorPoolsModule } from './nominator_pools/nominator_pools.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [NominatorPoolsModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
