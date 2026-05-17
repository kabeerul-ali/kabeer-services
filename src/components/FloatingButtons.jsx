import React from "react";

import {
  FaWhatsapp,
  FaPhoneAlt
} from "react-icons/fa";

const FloatingButtons = () => {

  return (

    <div className="floating-container">

      <a
        href="https://wa.me/919528536346"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919528536346"
        className="floating-btn call-float"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
};

export default FloatingButtons;