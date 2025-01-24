import { Elysia, t } from "elysia";

const app = new Elysia();
app
  .get("/", "Hello Elysia")
  .get("/user/:id", ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .post("/form", ({ body }) => body)
  .listen(3000);

console.log("elysia is running on http://localhost:3000/");
