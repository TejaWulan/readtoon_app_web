import ImageHero from "../../assets/img/image_manhwa1.jpg";
import BgElement from "../../assets/img/image_manhwa2.jpg";
import BgElement1 from "../../assets/img/image_manhwa3.jpg";

import React, { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* ===============================
   1. HOOK: Prev / Next Button
================================ */
const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

/* ===============================
   2. Autoplay Button Handling
================================ */
const useAutoplay = (emblaApi) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggle = () => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.isPlaying() ? autoplay.stop() : autoplay.play();
    setIsPlaying(autoplay.isPlaying());
  };

  return { isPlaying, toggle };
};

/* ===============================
   3. Autoplay Progress Bar Hook
================================ */
const useAutoplayProgress = (emblaApi, progressNode) => {
  const [show, setShow] = useState(false);
  const rafId = useRef(0);
  const timeoutId = useRef(0);
  const animationName = useRef("");

  const start = useCallback(
    (time) => {
      if (!progressNode.current || time === null) return;

      const node = progressNode.current;

      if (!animationName.current) {
        animationName.current = window.getComputedStyle(node).animationName;
      }

      node.style.animationName = "none";
      node.style.transform = "translateX(0)";

      rafId.current = requestAnimationFrame(() => {
        timeoutId.current = setTimeout(() => {
          node.style.animationName = animationName.current;
          node.style.animationDuration = `${time}ms`;
        });
      });

      setShow(true);
    },
    [progressNode]
  );

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    emblaApi
      .on("autoplay:timerset", () => start(autoplay.timeUntilNext()))
      .on("autoplay:timerstopped", () => setShow(false));
  }, [emblaApi, start]);

  return { show };
};

/* ===============================
   4. Button Components
================================ */
const PrevButton = (props) => (
  <button className="embla__button embla__button--prev" {...props}>
    ‹
  </button>
);

const NextButton = (props) => (
  <button className="embla__button embla__button--next" {...props}>
    ›
  </button>
);

/* ===============================
   5. MAIN CAROUSEL COMPONENT
================================ */
const EmblaCarousel = ({ slides, options }) => {
  const progressNode = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { isPlaying, toggle } = useAutoplay(emblaApi);

  const { show } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className="embla__slide" key={i}>
              <img src={slide} alt="" className="embla__slide__img" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

        <div className={`embla__progress ${show ? "" : "hidden"}`}>
          <div className="embla__progress__bar" ref={progressNode}></div>
        </div>

        <button className="embla__play" onClick={toggle}>
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
