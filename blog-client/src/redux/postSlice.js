import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    myPosts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setMyPosts: (state, action) => {
      state.myPosts = action.payload;
    },
    addPosts: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePosts: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      if (index !== -1) state.posts[index] = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

export const { setPosts, setMyPosts, addPosts, updatePosts, deletePost } =
  postSlice.actions;
export default postSlice.reducer;