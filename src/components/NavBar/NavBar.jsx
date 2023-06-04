import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

const languageOptions = [
  { value: "en", label: "en" },
  { value: "uk", label: "ua" },
];

const NavBar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to="/About">{t("About")}</Link>
          </li>
          <li>
            <Link to="/experience">{t("Experience")}</Link>
          </li>
          <li>
            <Link to="/portfolio">{t("Portfolio")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("Contact")}</Link>
          </li>
          <div className="select-wrap">
            <label htmlFor="lang"></label>
            <select
              className="custom-select"
              id="lang"
              value={i18n.language}
              onChange={handleChangeLanguage}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
