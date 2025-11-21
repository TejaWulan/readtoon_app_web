import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = ({ slides, options }) => {
  const autoplayRoot = useRef(null);

  const autoplay = Autoplay(
    { delay: 3000, stopOnInteraction: false },
    autoplayRoot
  );

  const [emblaRef] = useEmblaCarousel(options, [autoplay]);

  return (
    <div className="embla" ref={autoplayRoot}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((src, i) => (
            <div
              className="embla__slide w-full h-[240px] md:h-[450px] flex-shrink-0"
              key={i}
            >
              <img
                src={src}
                alt=""
                className="embla__slide__img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
