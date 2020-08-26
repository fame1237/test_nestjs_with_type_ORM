import { createHash } from 'crypto';
import { Injectable,NotFoundException } from "@nestjs/common";
import { FindAllQuery } from "./queries/find-all.query";
import { UserRepository } from "src/databases/repositories";
import { UserEntity } from "src/databases/entities/user.entity";
import { CreateDto,UpdateDto } from "./dtos";

@Injectable()
export class UsersService{
    private readonly _userRepository:UserRepository;
    
    constructor(userRepository:UserRepository){
        this._userRepository = userRepository
    }

    findAll(args: FindAllQuery = {}) : Promise<UserEntity[]>{
        const {limit,offset} = args;
        return this._userRepository.find({
            take:limit,
            skip:offset
        });
    }

    create(args: CreateDto) : Promise<UserEntity>{
        const user :UserEntity = new UserEntity({ ...args,
        password: createHash('md5').update(args.password).digest('hex')
      });
        return this._userRepository.save(user);
    }

    async remove(userId:string): Promise<UserEntity>{
        const user:UserEntity = await this._findById(userId)
        await this._userRepository.delete(user);
        console.log('------------------------------------');
        console.log(user);
        console.log('------------------------------------');
        return user
    }

    async update(userId:string,args: UpdateDto={}): Promise<UserEntity>{
        const {password,...restArgs} = args;
        const user :UserEntity = await this._findById(userId);
        const updateUser :UserEntity = new UserEntity({...user,...restArgs});

        if(password) updateUser.password = this._encrptPassword(args.password)

        return this._userRepository.save(updateUser);
    }

    private async _findById(userId:string):Promise<UserEntity>{
        const user:UserEntity = await this._userRepository.findOne(userId);
        if(!user) throw new NotFoundException("user_not_found");

        return user;
    }

    private  _encrptPassword(password:string):string{
        return createHash('md5').update(password).digest('hex');
    }
}