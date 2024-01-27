import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAdminMigration1706313697930 implements MigrationInterface {
  name = "UserAdminMigration1706313697930";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
  }
}
