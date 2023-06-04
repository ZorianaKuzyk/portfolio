import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="contact section">
        <h2 className="section__title">
          {t("Let's Stay")} <span>{t("Connected")}</span>
        </h2>
        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">{t("Don't be Shy")}</h3>
            <p className="contact__description">
              {t(
                "Fell free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
              )}
            </p>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">{t("Mail me")}</span>
                  <h4 className="info__desc"> zoryanakyzuk9@gmail.com</h4>
                </div>
              </div>
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">{t("Call me")}</span>
                  <h4 className="info__desc"> +380 686 78 51 05</h4>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              <a
                href="https://www.facebook.com/zoryana.kuzyk"
                className="contact__socials-link"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/zoriana-kuzyk-118192260/"
                className="contact__socials-link"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ZorianaKuzyk"
                className="contact__socials-link"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
