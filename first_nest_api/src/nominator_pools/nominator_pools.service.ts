import { plainToClass } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pool } from './pool.entity';
import { CreatePoolDto } from './dto/create-pool.dto';

@Injectable()  // shows that you can automatiacally inject it by providing as param into constructor
export class NominatorPoolsService {
    // for DBs
    constructor(
        @InjectRepository(Pool)
        private poolsRepository: Repository<Pool>,
        private dataSource: DataSource,
      ) {}
    
    async createNewPool(pool: Pool) {
        await this.dataSource.transaction(async manager => {
            await manager.save(pool);
        });
    }
      
    async getPools(type?: 'custodial' | 'non-custodial') {
        if (type) {
            const pools = await this.dataSource.manager
                .createQueryBuilder(Pool, "pools")
                .where("pools.type = :type", { type })
                .getMany();
        return pools;
        }
        // using manager
        const pools = await this.dataSource.manager
            .createQueryBuilder(Pool, "pools")
            .getMany();
        // using repository
        /*const pools = await this.dataSource
            .getRepository(Pool)
            .createQueryBuilder("pools")
            .getMany()*/
        return pools;
    }

    async getPool(id: number) {
        const pool = await this.dataSource.manager
            .createQueryBuilder(Pool, "pool")
            .where("pool.id = :id", { id })
            .getOne();
        if (!pool) {
            throw new Error('pool not found')
        }
        return pool;
    }

    createPool(createPoolDto: CreatePoolDto) {
        const pool = {
            id: 0,
            ...createPoolDto,
        }
        let newPool = plainToClass( Pool, pool);
        return this.createNewPool(newPool);  // gets entity
    }
}
