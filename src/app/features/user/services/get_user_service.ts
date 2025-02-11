import db from "../../../database/db.ts";

export const getAllUsers = () => {
  return db.query("SELECT * FROM users").map(([id, name]) => ({ id, name }));
};
