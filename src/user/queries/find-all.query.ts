import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from 'class-transformer'
import { IsInt,Max, IsOptional } from 'class-validator'

export class FindAllQuery{
    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Max(10)
    @Transform(value=> parseInt(value))
    limit?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Max(10)
    @Transform(value=> parseInt(value))
    offset?: number;
}

