import { Context, Next } from "https://deno.land/x/hono/mod.ts";

export const authGuard = (permissions: string[]) => {
  console.log(permissions);
  return async (c: Context, next: Next) => {
    const authHeader = c.req.header("Authorization");

    if (!authHeader || authHeader !== "Bearer 12345") {
      return c.json({ message: "Acesso negado!" }, 401);
    }

    await next();
  };
};
