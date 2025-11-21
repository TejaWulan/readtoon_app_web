import React from "react";
import EmblaCarousel from "./EmblaCarousel";

import ImageHero from "../../assets/img/image_manhwa1.jpg";
import BgElement from "../../assets/img/image_manhwa2.jpg";
import BgElement1 from "../../assets/img/image_manhwa3.jpg";

export default function Hero() {
  const slides = [ImageHero, BgElement, BgElement1];

  const options = { loop: true };

  return (
    <section className="w-full">
      <EmblaCarousel slides={slides} options={options} />
    </section>
  );
}
