import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominatorPoolsModule } from './nominator_pools/nominator_pools.module';
import { ExampleModule } from './example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pool } from './nominator_pools/pool.entity';
import { load } from 'ts-dotenv';

const env = load({
    DB_USER: String,
    DB_PASSWORD: String,
    DB_HOST: String,
    DB_NAME: String,
});
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DB_HOST,
      port: 3306,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      //entities: [Pool],
      autoLoadEntities: true,  // only in neest
      synchronize: true, //Indicates if database schema should be auto created on every application launch.
    }),
    NominatorPoolsModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
