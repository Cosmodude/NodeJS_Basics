import { Injectable } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';

@Injectable()  // shows that you can automatiacally inject it by providing as param into constructor
export class NominatorPoolsService {
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
