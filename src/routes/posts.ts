import { Router } from "express";
import { selectPosts, addPost } from "../store/slices/posts.slice.js";
import { store } from "../store/index.js";
import { Post } from "../store/slices/posts.slice.js";
export const posts: Router = Router({});

posts.get("", (req, res) => {
  res.json(selectPosts(store.getState()));
});
posts.post("", (req, res) => {
  const post: Post = {
    title: req.body?.title,
    content: req.body?.content,
    image: req.body?.image,
  };

  store.dispatch(addPost(post));

  res.redirect("/posts");
});
