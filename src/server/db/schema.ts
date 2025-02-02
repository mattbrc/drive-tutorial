import { sql } from "drizzle-orm";
import {
  bigint,
  int,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  json,
  text,
  boolean,
} from "drizzle-orm/mysql-core";

export const mysqlTable = mysqlTableCreator((name) => `drive_tutorial_${name}`);


export const users = mysqlTable("users_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  name: text("name"),
  age: int("age"),
});