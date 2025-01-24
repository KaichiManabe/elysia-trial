// client.ts
import { treaty } from "@elysiajs/eden";
import { App } from "../server/server";

const app = treaty<App>("localhost:3000");

// Get data from /user/617
const { data } = await app.user({ id: 617 }).get();

console.log(data);
