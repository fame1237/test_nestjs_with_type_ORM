import {MigrationInterface, QueryRunner, Column, TableColumn} from "typeorm";

export class AddColumnDisplayName1586775796162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('users',new TableColumn({
            name: 'displayName',
            type: 'varchar',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('users','displayName');
    }

}
