import { Context } from "hono";
import { createUserSchema } from "../schemas/create_users_schema.ts";
import { checkUserEmailExists, createUser } from "../services/create_user_service.ts";

export const addUser = async (c: Context) => {
  const body = await c.req.json();
  const parsedData = createUserSchema.safeParse(body);

  if (!parsedData.success) {
    return c.json({ message: parsedData.error.format() }, 400);
  }

  if (checkUserEmailExists(parsedData.data.email)) {
    return c.json({ message: "Email ja cadastrado!" }, 400);
  }

  createUser(parsedData.data.name, parsedData.data.email);
  return c.json({ message: "Usuário criado!" }, 201);
};
