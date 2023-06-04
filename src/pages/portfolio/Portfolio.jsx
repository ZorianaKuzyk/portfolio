import React from "react";
import PortfolioItem from "../portfolio/PortfolioItem";
import "./Portfolio.css";
import { selectAllPortfolio } from "./PortfolioSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolio = useSelector(selectAllPortfolio);
  const renderPortfolios = portfolio.map((portfolios) => (
    <PortfolioItem key={portfolios.id} {...portfolios} />
  ));
  return (
    <>
      <section className="portfolio__section">
        <h2 className="section__title">
          {t("My")} <span>{t("Projects")}</span>
        </h2>
        <div className="portfolio__container container__grid">
          {renderPortfolios}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
