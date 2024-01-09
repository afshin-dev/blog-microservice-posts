import { Router } from "express";

export const posts: Router = Router({});

posts.get("", (req, res) => {
  res.json({
    msg: "ok",
  });
});
