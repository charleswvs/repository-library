import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBook1607881337001 implements MigrationInterface {
    name = 'CreateBook1607881337001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "author" varchar NOT NULL, "loan" boolean NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
