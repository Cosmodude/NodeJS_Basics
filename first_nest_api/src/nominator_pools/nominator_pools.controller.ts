import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { CreatePoolDto } from 'src/nominator_pools/dto/create-pool.dto';
import { NominatorPoolsService } from 'src/nominator_pools/nominator_pools.service'
@Controller('nominator-pools')
export class NominatorPoolsController {

    constructor(private readonly nominatorPoolsService: NominatorPoolsService){}
    @Get()
    getPools(@Query('type') type: 'custodial' | 'non-custodial') {
        return  this.nominatorPoolsService.getPools(type);
    }
    
    @Get(':id')
    getPool(@Param('id') id: string) {
        return this.nominatorPoolsService.getPool(+id);
    }
    @Post()
    createPool(@Body() pool: CreatePoolDto) {
        return this.nominatorPoolsService.createPool(pool);
    }

}
