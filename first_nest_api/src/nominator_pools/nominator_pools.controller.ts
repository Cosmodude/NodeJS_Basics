import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { CreatePoolDto } from 'src/nominator_pools/dto/create-pool.dto';

@Controller('nominator-pools')
export class NominatorPoolsController {
    @Get()
    getPools() {
        return  [];
    }
    @Get('/bytype')
    getActivePools(@Query('type') type: string) {
        return  [{"type": type},];
    }
    @Get(':id')
    getPool(@Param('id') id: string) {
        return  {id,};
    }
    @Post()
    createPool(@Body() pool: CreatePoolDto) {
        return pool.address;
    }

}
