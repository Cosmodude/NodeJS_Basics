import { Domain } from "domain";
import { CreatePoolDto } from './dto/create-pool.dto';
import { Pool } from './pool.entity';

export class Dto {
    static fromDomain(domain: Domain) {  // Domain is an entity
       // mapping goes here
    }
    static toDomain(poolDto: CreatePoolDto) { // Domain is an entity
        const poolEntity = new Pool(); 

    }  
 }