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

    addEducations: (state, action) => {
      state.education = [...state.education, action.payload];
    },

    deleteEducations: (state, action) => {
      state.education = state.education.filter(
        (edu) => edu.id !== action.payload
      );
    },

    saveEditedEducation: (state, action) => {
      state.education = state.education.map((edu) =>
        edu.id === action.payload.id
          ? {
              ...edu,
              id: action.payload.id,
              institution: action.payload.institution,
              course: action.payload.course,
              graduationYear: action.payload.graduationYear,
              cs: action.payload.cs,
            }
          : edu
      );
    },

    addSkills: (state, action) => {
      state.skills = [...state.skills, action.payload];
    },

    deleteSkills: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
  },
});

export const {
  chooseTemplate,
  addProfile,
  addEducations,
  deleteEducations,
  saveEditedEducation,
  addSkills,
  deleteSkills,
} = resumeSlice.actions;

export const selectTemplate = (state) => state.resume.template;
export const selectProfile = (state) => state.resume.profile;
export const selectSkills = (state) => state.resume.skills;
export const selectEducation = (state) => state.resume.education;

/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default resumeSlice.reducer;
