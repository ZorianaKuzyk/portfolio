import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../pages/about/AboutSlice";
import experienceReducer from "../pages/experience/ExperienceSlice";
import homeReducer from "../pages/home/HomeSlice";
import portfolioReducer from "../pages/portfolio/PortfolioSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    experience: experienceReducer,
    home: homeReducer,
    portfolio: portfolioReducer,
  },
});
