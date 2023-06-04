import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "First Name: ",
    description: "Zoriana",
  },

  {
    id: 2,
    title: "Last Name: ",
    description: "Kuzyk",
  },

  {
    id: 3,
    title: "Age: ",
    description: "25 Years",
  },

  {
    id: 4,
    title: "Nationality: ",
    description: "Ukrainian",
  },

  {
    id: 5,
    title: "Address: ",
    description: "Ternopil",
  },

  {
    id: 6,
    title: "Email: ",
    description: "zoryanakyzuk9@gmail.com",
  },

  {
    id: 7,
    title: "Languages: ",
    description: "Ukrainian, English",
  },
];
const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    skillAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, title, description) {
        return {
          payload: {
            id,
            title,
            description,
          },
        };
      },
    },
  },
});
export const selectAllAbout = (state) => state.about;
export default aboutSlice.reducer;
