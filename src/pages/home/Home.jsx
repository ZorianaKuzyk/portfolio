import React from "react";
import Profile from "../../assets/home.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { useSelector } from "react-redux";
import { selectAllHome } from "./HomeSlice";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const home = useSelector(selectAllHome);
  const renderHomes = home.map((homes) => (
    <div className="home__data" key={homes.id}>
      <h1 className="home__title">
        <span>
          {t(homes.title)}
          <br></br>
        </span>
        {t(homes.description)}
      </h1>
      <p className="home__description">{t(homes.text)}</p>
    </div>
  ));
  return (
    <section className="home__section ">
      <img src={Profile} alt="main-photo" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          {renderHomes}
          <Link to="/about" className="button">
            {t("More About Me")}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
