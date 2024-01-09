import express from "express";
import { posts } from "./routes/posts.js";
import { PORT, HOST } from "./cfg/server.js";
const app = express();

app.use(express.json());

app.use("/posts/", posts);

app.listen(PORT, HOST, () => {
  console.log(`server listen of ${HOST}:${PORT}`);
});
