import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTools1613540488884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tools',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'title',
                        type: 'text'
                    },
                    {
                        name: 'link',
                        type: 'text'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'tags',
                        type: 'text[]'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tools')
    }
}
