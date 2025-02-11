import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const createUserSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório!").trim(),
    email: z.string().min(1, "O email é obrigatório!").trim().email("Formato de email inválido"),
  })
  .strict();
