import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/user";

export default configureStore({
  reducer: { user: userReducer },
});
