import { Controller, Get, Param, Post, Query, Body ,NotFoundException, BadRequestException} from '@nestjs/common';
import { CreatePoolDto } from 'src/nominator_pools/dto/create-pool.dto';
import { NominatorPoolsService } from 'src/nominator_pools/nominator_pools.service'
@Controller('nominator-pools')
export class NominatorPoolsController {

    constructor(private readonly nominatorPoolsService: NominatorPoolsService){}
    @Get()
    getPools(@Query('type') type: 'custodial' | 'non-custodial') {
        try {
            return this.nominatorPoolsService.getPools(type);
        }catch(err){throw new BadRequestException();}
    }
    
    @Get(':id')
    getPool(@Param('id') id: string) {
        try {
            return this.nominatorPoolsService.getPool(+id);
        } catch (err) {
            throw new NotFoundException();
        }
    }
    @Post()
    createPool(@Body() pool: CreatePoolDto) {
        return this.nominatorPoolsService.createPool(pool);
    }

}
