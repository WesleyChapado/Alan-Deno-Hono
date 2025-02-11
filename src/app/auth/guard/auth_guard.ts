import { Context, Next } from 'hono';

export const authGuard = (permissions: string[]) => {
  return async (c: Context, next: Next) => {
    // Your authentication logic here
    const authHeader = c.req.header("Authorization");
    const hasPermission = permissions.every(permission => authHeader?.includes(permission));

    if (!hasPermission) {
      return c.text('Forbidden', 403);
    }

    await next();
  };
};
