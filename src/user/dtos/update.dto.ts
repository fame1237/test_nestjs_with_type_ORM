import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsString, Length, IsNotEmpty, IsOptional } from "class-validator"
import { UserEntity } from "src/databases/entities/user.entity"

export class UpdateDto implements Partial<UserEntity> {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Length(3,20)
    displayName?:string |null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Length(3,20)
    username?:string | null;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @Length(3,20)
    password?:string |null;
}