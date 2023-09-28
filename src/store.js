import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let bucket = createSlice({
  name: "bucket",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      state[action.payload].count++;
    },
  },
});
export let { changeCount } = bucket.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    bucket: bucket.reducer,
  },
});
