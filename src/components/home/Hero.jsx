import React from "react";
import EmblaCarousel from "./EmblaCarousel";

import Element1 from "../../assets/img/slides/heroslides1.png";
import Element2 from "../../assets/img/slides/heroslides2.png";
import Element3 from "../../assets/img/slides/heroslides3.png";
import Element4 from "../../assets/img/slides/heroslides4.png";

export default function Hero() {
  const slides = [Element1, Element2, Element3, Element4];

  return (
<section className="w-full overflow-hidden flex justify-center">
  <div className="w-full max-w-[1440px] overflow-hidden">
    <EmblaCarousel slides={slides} options={{ loop: true }} />
  </div>
</section>
  );
}
