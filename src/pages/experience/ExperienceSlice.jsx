import { createSlice } from "@reduxjs/toolkit";
import { FaGraduationCap } from "react-icons/fa";

const initialState = [
  {
    id: 3,
    icon: <FaGraduationCap />,
    year: "03/2023 – 05/2023",
    title: "Cursor Education <span> Advanced Front-end Course </span>",
    desc: "JavaScript (ES6+), React & Redux",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    year: "01/2023 – 02/2023",
    title: "Cursor Education <span> Basic Front-end Course </span>",
    desc: "HTML5 / CSS3",
  },

  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016-2020",
    title:
      "Computer Engineering <span> Ternopil Ivan Puluj National Technical University </span>",
    desc: "Bachelor",
  },
];
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    skillAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, icon, year, title, desc) {
        return {
          payload: {
            id,
            icon,
            year,
            title,
            desc,
          },
        };
      },
    },
  },
});
export const selectAllExperience = (state) => state.experience;
export default experienceSlice.reducer;
