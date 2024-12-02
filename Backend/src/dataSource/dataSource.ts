import { DataSource } from "typeorm";
import "reflect-metadata";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities : ["src/entities/Country.ts"],
    synchronize: true,
    logging: true
})