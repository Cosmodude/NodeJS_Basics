import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominatorPoolsModule } from './nominator_pools/nominator_pools.module';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pool } from './nominator_pools/pool.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nominator-pools',
      entities: [Pool],
      autoLoadEntities: true,
      synchronize: true, //Indicates if database schema should be auto created on every application launch.
    }),
    NominatorPoolsModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
