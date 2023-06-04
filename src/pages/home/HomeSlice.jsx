import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Hi, I'm Zoriana Kuzyk",
    description: "Trainee/Junior Frontend developer",
    text: "Attentive to details. Supportive and enthusiastic team player for streamlining processes and efficiently resolving project issues in the future team. Friendly, positive, highly motivated person.",
  },
];
const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    skillAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, title, description, text) {
        return {
          payload: {
            id,
            title,
            description,
            text,
          },
        };
      },
    },
  },
});
export const selectAllHome = (state) => state.home;
export default homeSlice.reducer;
