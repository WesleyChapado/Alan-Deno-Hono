import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("database.sqlite");

db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`);

console.log("Banco de dados configurado.");

export default db;
