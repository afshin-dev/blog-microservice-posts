import { Router } from "express";
import {
  selectPosts,
  addPost,
  selectSinglePost,
} from "../store/slices/posts.slice.js";
import { store } from "../store/index.js";
import { Post } from "../store/slices/posts.slice.js";
import { STATUS_CODES } from "node:http";

export const posts: Router = Router({});

posts.get("/", (req, res) => {
  res.json(selectPosts(store.getState()));
});
posts.post("/", (req, res) => {
  // title must be in request body
  if (!req.body.title) {
    res.status(400).json({ error: STATUS_CODES["400"] });
    return;
  }

  const post: Post = {
    title: req.body?.title,
    content: req.body?.content,
    image: req.body?.image,
  };

  store.dispatch(addPost(post));

  return res.json(selectPosts(store.getState()));
});

posts.get("/:postId", (req, res) => {
  if (!req.params.postId) {
    return res.status(400).json({
      msg: "postId is required",
    });
  }

  return res.json(selectSinglePost(req.params.postId)(store.getState()));
  // return res.json({ msg: 'ok' });
});
