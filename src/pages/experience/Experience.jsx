import React from "react";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { selectAllExperience } from "./ExperienceSlice";
import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience = () => {
  const { t } = useTranslation();
  const experience = useSelector(selectAllExperience);
  const renderExperiences = experience.map((experiences) => (
    <div className="resume__item" key={experiences.id}>
      <div className="resume__icon">{experiences.icon}</div>
      <span className="resume__data">{experiences.year}</span>
      <h3 className="resume__subtitle">{parse(experiences.title)}</h3>
      <p className="resume__description">{t(experiences.desc)}</p>
    </div>
  ));
  return (
    <>
      <section className="resume">
        <h2 className="section__title">
          {t("Experience &")}
          <span> {t("Education")}</span>
        </h2>
        <div className="resume__container">
          <div className="resume__data">{renderExperiences}</div>
        </div>
      </section>
    </>
  );
};

export default Experience;
