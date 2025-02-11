import db from "../../../database/db.ts";

export const createUser = (name: string, email: string) => {
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
};

export const checkUserEmailExists = (email: string) => {
  const user = db.query("SELECT * FROM users WHERE email = ?", [email]);
  return user.length > 0 ? true : false;
};
