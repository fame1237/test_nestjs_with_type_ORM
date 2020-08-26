import { ApiProperty } from "@nestjs/swagger"
import { IsString, Length, IsNotEmpty } from "class-validator"
import { UserEntity } from "src/databases/entities/user.entity"

export class CreateDto implements Partial<UserEntity> {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3,20)
    displayName:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3,20)
    username:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3,20)
    password:string
}