import { Module } from "@nestjs/common"
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/databases/repositories";
import { DatabasesModule } from "src/databases/databases.module";

@Module({
    controllers:[UsersController],
    providers:[UsersService],
})

export class UserModule{}