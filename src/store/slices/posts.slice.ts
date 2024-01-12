import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index.js";
import { randomBytes } from "node:crypto";

export interface Post {
  id?: string;
  title: string;
  content?: string;
  image?: string;
}

interface PostsSliceState {
  entities: Post[];
}

const initialState: PostsSliceState = {
  entities: [],
};
const posts = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const id: string = randomBytes(10).toString("hex");

      action.payload.id = id;

      state.entities.push(action.payload);
    },
  },
});

export const { addPost } = posts.actions;
export const selectPosts: (state: RootState) => Post[] = (state: RootState) =>
  state.posts.entities;

export const selectSinglePost: (
  postId: string
) => (state: RootState) => Post | null =
  (postId: string) => (state: RootState) => {
    if (postId) {
      return state.posts.entities.find((p) => p?.id === postId) || null;
    } else {
      return null;
    }
  };
export default posts.reducer;
