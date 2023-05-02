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
      
      findAll(): Promise<Pool[]> {
            return this.poolsRepository.find();
    }
    
    private pools = [
        { id: 0, address: "0x1", totalStake: 1e6, name: "First Pool", profitShare: 60,type: "custodial"},
        { id: 1, address: "0x2", totalStake: 5e5, name: "TEB Pool", profitShare: 90, type: "non-custodial"},
        { id: 2, address: "0x3", totalStake: 6e4, name: "TON Blades", profitShare: 70, type: "custodial"},
    ]

    async getPools(type?: 'custodial' | 'non-custodial') {
        if (type) {
            const pools = await this.dataSource
            .getRepository(Pool)
            .createQueryBuilder("pools")
            .where("pools.type = :type", { type })
            .getMany()
        return pools;
        }
        const pools = await this.dataSource
            .getRepository(Pool)
            .createQueryBuilder("pools")
            .getMany()
        return pools;
    }

    getPool(id: number) {
        const pool = this.pools.find((pool) => pool.id === id);
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
