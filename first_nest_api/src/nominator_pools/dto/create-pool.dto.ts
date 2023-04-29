import { MinLength, IsEnum } from "class-validator";

export class CreatePoolDto {
    address: string;

    totalStake: number;

    @MinLength(3)
    name: string;

    profitShare: number;

    @IsEnum(['custodial', 'non-custodial'],{message:"use proper custodity type"})
    type: string;
    
}
