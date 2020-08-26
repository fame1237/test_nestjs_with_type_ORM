import { PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, Entity, BeforeInsert } from "typeorm";
import * as uniqid from 'uniqid';

@Entity('users')
export class UserEntity {

    @PrimaryColumn()
    _id:String;

    @Column()
    displayName:String;

    @Column()
    username:String;
    
    @Column()
    password:String;
    
    @UpdateDateColumn()
    updatedAt:Date;

    @CreateDateColumn()
    createdAt:Date;

    @BeforeInsert()
    private _beforeInsert(){
        this._id = uniqid();
    }

    constructor(partial?:Partial<UserEntity>){
        Object.assign(this,partial)
    }

}