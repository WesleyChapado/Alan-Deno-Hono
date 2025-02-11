import { Context } from "hono";
import { getAllUsers } from "../services/get_user_service.ts";

export const listUsers = (c: Context) => {
  const users = getAllUsers();
  return c.json(users);
};
