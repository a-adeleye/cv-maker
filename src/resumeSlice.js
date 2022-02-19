import { createSlice } from "@reduxjs/toolkit";
import { downloadFromStorage} from "./components/localstorage";


const initialState = downloadFromStorage();

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

    addCertifications: (state, action) => {
      state.certifications = [...state.certifications, action.payload];
    },

    deleteCertifications: (state, action) => {
      state.certifications = state.certifications.filter(
        (cert) => cert.id !== action.payload
      );
    },

    saveEditedCertification: (state, action) => {
      state.certifications = state.certifications.map((cert) =>
        cert.id === action.payload.id
          ? {
              ...cert,
              id: action.payload.id,
              name: action.payload.name,
              achievedYear: action.payload.achievedYear,
              expirationYear: action.payload.expirationYear,
              exp: action.payload.exp,
            }
          : cert
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

    addExperiences: (state, action) => {
      state.experience = [...state.experience, action.payload];
    },

    deleteExperiences: (state, action) => {
      state.experience = state.experience.filter(
        (exp) => exp.id !== action.payload
      );
    },

    saveEditedExperience: (state, action) => {
      state.experience = state.experience.map((exp) =>
        exp.id === action.payload.id
          ? {
              ...exp,
              id: action.payload.id,
              role: action.payload.role,
              company: action.payload.company,
              fromDate: action.payload.fromDate,
              toDate: action.payload.toDate,
              cw: action.payload.cw,
              responsibilities: action.payload.responsibilities,
            }
          : exp
      );
    },

    addGeneralDetails: (state, action) => {
      state.generalDetails = action.payload;
    },

  },
});

export const {
  chooseTemplate,
  addGeneralDetails,
  editGeneralDetails,
  addProfile,
  saveEditedProfile,
  addEducations,
  deleteEducations,
  saveEditedEducation,
  addCertifications,
  deleteCertifications,
  saveEditedCertification,
  addSkills,
  deleteSkills,
  addExperiences,
  deleteExperiences,
  saveEditedExperience,
} = resumeSlice.actions;

export const selectTemplate = (state) => state.resume.template;
export const selectProfile = (state) => state.resume.profile;
export const selectSkills = (state) => state.resume.skills;
export const selectEducation = (state) => state.resume.education;
export const selectCertification = (state) => state.resume.certifications;
export const selectExperience = (state) => state.resume.experience;
export const selectGeneralDetails = (state) => state.resume.generalDetails;

/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default resumeSlice.reducer;
