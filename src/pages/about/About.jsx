import React from "react";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Kuzyk_Front-end.pdf";
import { useSelector } from "react-redux";
import { selectAllAbout } from "./AboutSlice";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  const about = useSelector(selectAllAbout);
  const renderAbouts = about.map((abouts) => (
    <li className="info__item" key={abouts.id}>
      <span className="info__title">{t(abouts.title)}</span>
      <span className="info__description">{t(abouts.description)}</span>
    </li>
  ));
  return (
    <main className="section__container">
      <section className="about">
        <h2 className="section__title">
          {t("Detail")} <span>{t("Info")}</span>
        </h2>
        <div className="about__container">
          <div className="about__info">
            <h3 className="section__subtitle">{t("Personal Info")}</h3>
            <ul className="info__list ">{renderAbouts}</ul>
            <a href={CV} download="" className="button">
              {t("Download CV")}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="skills">
            <h3 className="section__subtitle subtitle__center">
              {t("My Skills")}
            </h3>
            <ul className="skills__list">
              <li className="list__item">HTML/CSS</li>
              <li className="list__item">Sass/SCSS</li>
              <li className="list__item">JavaScript</li>
              <li className="list__item">Webpack</li>
              <li className="list__item">React</li>
              <li className="list__item">Redux</li>
              <li className="list__item">Bootstrap</li>
              <li className="list__item">Yarn/npm</li>
              <li className="list__item">Figma</li>
              <li className="list__item">Pug</li>
              <li className="list__item">BEM</li>
              <li className="list__item">GIT</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
