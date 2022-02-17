import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: "",
  generalDetails: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  },
  profile: "",
  education: [],
  experience: [],
  skills: [],
  status: "idle",
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,

  reducers: {
    chooseTemplate: (state, action) => {
      state.template = action.payload;
    },

    addProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { chooseTemplate, addProfile} = resumeSlice.actions;

export const selectTemplate = (state) => state.resume.template;
export const selectProfile = (state) => state.resume.profile;

/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default resumeSlice.reducer;
