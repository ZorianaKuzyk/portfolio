import React, { useState } from "react";
import Close from "../../assets/close.svg";
import { useTranslation } from "react-i18next";

const PortfolioItem = ({ img, title, details }) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="portfolio__item">
        <img src={img} alt="portfolio-img" className="portfolio__img" />
        <div className="portfolio__hover" onClick={toggleModal}>
          <h3 className="portfolio__title">{t(title)}</h3>
        </div>
        {modal && (
          <div className="portfolio__modal">
            <div className="portfolio__modal-content">
              <img
                src={Close}
                alt="close-img"
                className="modal__close"
                onClick={toggleModal}
              />
              <h3 className="modal__title">{t(title)}</h3>
              <ul className="modal__list">
                {details.map(({ icon, title, desc, href, code }, index) => {
                  return (
                    <div className="modal__item" key={index}>
                      <span className="item__icon">{icon}</span>
                      <span className="item__title">{t(title)}</span>
                      <span className="item__details">{t(desc)}</span>
                      <a className="item__links" target="_blank" href={href}>
                        {href}
                      </a>
                      <a className="item__code" target="_blank" href={code}>
                        {t(code)}
                      </a>
                    </div>
                  );
                })}
              </ul>
              <img src={img} alt="modal-img" className="modal__img" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
