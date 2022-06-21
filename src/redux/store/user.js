import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { lastName: "smith" },
  },
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
