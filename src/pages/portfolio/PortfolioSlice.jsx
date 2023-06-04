import { createSlice } from "@reduxjs/toolkit";
import { FaCode, FaCodeBranch } from "react-icons/fa";

import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "../../assets/project-1.jpg";
import Work2 from "../../assets/project-2.jpeg";
import Work3 from "../../assets/project-3.jpg";
import Work4 from "../../assets/project-4.jpeg";
import Work5 from "../../assets/project-5.jpg";
import Work6 from "../../assets/project-6.jpg";

const initialState = [
  {
    id: 1,
    img: Work1,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Layout",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-deploy/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-deploy/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Search Filter ",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-hooks/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-hooks/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Timer",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-classes/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-classes",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "SPA",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-spa/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-spa",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Registration forms",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-styled-components/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-styled-components",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Form for create a new posts",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Redux",
      },
      {
        icon: <FaCodeBranch />,
        title: "Preview : ",
        href: "https://zorianakuzyk.github.io/react-redux/",
      },
      {
        icon: <FiExternalLink />,
        title: "Code : ",
        code: "https://github.com/ZorianaKuzyk/react-redux",
      },
    ],
  },
];
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    skillAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, img, title) {
        return {
          payload: {
            id,
            img,
            title,
          },
        };
      },
    },
  },
});
export const selectAllPortfolio = (state) => state.portfolio;
export default portfolioSlice.reducer;
