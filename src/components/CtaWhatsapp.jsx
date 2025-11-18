import React, { useState } from "react";
import CtaImg from "../assets/img/elements/cta-whatsappp.webp";
import PopupWA from "../assets/img/elements/popup-whatsapp.webp";

export default function CtaWhatsapp() {
  const [popup, setPopup] = useState(false);
  setTimeout(() => {
    if (popup == false) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, 10000);

  return (
    <div
      className="fixed bottom-0 right-0 m-5 md:m-10 flex items-center z-10"
      rel="noreferrer"
    >
      {popup == true ? (
        <img
          src={PopupWA}
          alt=""
          className="mix-blend-multiplys -mt-[30px] md:-mt-[50px] -mr-[3px] h-[70px] md:h-[100px] -translate-y-10"
          onClick={() => setPopup(false)}
        />
      ) : (
        <></>
      )}
      <a href="https://bit.ly/WAChatWIDEEdu" target="_blank">
        <img
          src={CtaImg}
          alt=""
          className="rounded-full h-[60px] md:h-[80px] hover:scale-110"
        />
      </a>
    </div>
  );
}
