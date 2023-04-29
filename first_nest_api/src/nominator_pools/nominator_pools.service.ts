import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pool } from './user.entity';
import { CreatePoolDto } from './dto/create-pool.dto';
@Injectable()  // shows that you can automatiacally inject it by providing as param into constructor
export class NominatorPoolsService {
    // for DBs
    constructor(
        @InjectRepository(Pool)
        private poolsRepository: Repository<Pool>,
        private dataSource: DataSource,
      ) {}
    
    async createMany(pools: Pool[]) {
        await this.dataSource.transaction(async manager => {
            await manager.save(pools[0]);
            await manager.save(pools[1]);
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

    getPools(type?: 'custodial' | 'non-custodial') {
        if (type) {
            return this.pools.filter((pool) => pool.type === type);
        }
        return this.pools;
    }

    getPool(id: number) {
        const pool = this.pools.find((pool) => pool.id === id);
        if (!pool) {
            throw new Error('pool not found')
        }
        return pool;
    }

    createPool(createPoolDto: CreatePoolDto) {
        const newPool = {
            ...createPoolDto,
            id: this.pools.length,
        }
        this.pools.push(newPool);
        return this.pools;
    }
}
