import express from "express";
import { posts } from "./routes/posts.js";
import { PORT, HOST } from "./cfg/server.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts/", posts);

app.listen(PORT, HOST, () => {
  console.log(`server listen of ${HOST}:${PORT}`);
});
