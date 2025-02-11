import { Hono } from 'hono'
import { listUsers } from "./src/app/features/user/controllers/get_users_controller.ts";
import { addUser } from "./src/app/features/user/controllers/create_users_controller.ts";
import { authGuard } from "./src/app/auth/guard/auth_guard.ts";
import { downloadAudio, getVideo } from "./src/app/features/video/controller/get_video_info_controller.ts";

const app = new Hono()

app.get("/users", authGuard(['apagar', 'criar']), listUsers);
app.post("/users", addUser);
app.get("/ytb", getVideo);
app.post("/ytb", downloadAudio);
Deno.serve({ port: 8787 }, app.fetch)