import { Controller, Get, Query, Post,Body,Delete, Param, Patch} from '@nestjs/common';
import { UsersService } from './user.service';
import { query } from 'express';
import { FindAllQuery } from './queries/find-all.query';
import { UserEntity } from "src/databases/entities/user.entity";
import { ApiTags } from '@nestjs/swagger';
import { CreateDto } from './dtos';
import { UserRepository } from "src/databases/repositories";
import { UpdateDto } from './dtos/update.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
    private readonly _userService: UsersService;
    
    constructor(userService:UsersService){
        this._userService = userService;
    }

    @Get()
    findAll(@Query() query:FindAllQuery): Promise<UserEntity[]>{
        console.log("===================")
        console.log(query)
        console.log("===================")
        return this._userService.findAll(query);
    }

    @Post()
    create(@Body() body:CreateDto): Promise<UserEntity>{
        console.log("===================")
        console.log(query)
        console.log("===================")
        return this._userService.create(body);
    }

    @Delete('/:userId')
    remove(@Param('userId') userId:string): Promise<UserEntity>{
        return this._userService.remove(userId);
    }

    // @Patch('/:userId')
    // update(@Param('userId') userId:string,@Body() body:UpdateDto): Promise<UserEntity>{
    //     return this._userService.update(userId,body);
    // }
}
