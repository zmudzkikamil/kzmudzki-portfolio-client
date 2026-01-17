import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.25;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: {
    id: string;
    title: string;
    image: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  console.log("slides", slides);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isReady, setIsReady] = useState(false);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__media") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
          tweenNode.style.opacity = `${scale * scale}`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);
  useEffect(() => {
    let loaded = 0;

    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loaded += 1;
        if (loaded === slides.length) {
          setIsReady(true);
        }
      };
    });
  }, [slides]);
  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center gap-12 w-full scale-75 sm:scale-150">
        {/* title skeleton */}
        <div className="w-36 h-12 sm:w-24 sm:h-8 bg-secondary/15 animate-pulse rounded-lg" />

        {/* carousel skeleton */}
        <div className="flex gap-14 w-full flex-1">
          <div className="hidden sm:block flex-1 aspect-[4/3] bg-secondary/15 animate-pulse rounded-2xl scale-90" />
          <div className="flex-1 aspect-[4/3] bg-secondary/15 animate-pulse rounded-2xl scale-125" />
          <div className="hidden sm:block flex-1 aspect-[4/3] bg-secondary/15 animate-pulse rounded-2xl scale-90" />
        </div>
      </div>
    );
  }
  return (
    <div className="embla  md:-mx-8 xl:-mx-12 -mx-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            // add title and make it scalable too
            <div
              className="relative basis-[85%] sm:basis-[55%] flex-shrink-0 flex-grow-0"
              key={slide.id}
            >
              <h2
                className={`
    absolute -top-[70px] left-0 right-0 text-center text-secondary text-3xl lg:text-4xl font-bold
    transition-all duration-300 ease-out
    ${
      index === selectedIndex
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }
  `}
              >
                {slide.title}
              </h2>
              <img
                className="embla__slide__media"
                src={slide.image}
                alt={slide.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
