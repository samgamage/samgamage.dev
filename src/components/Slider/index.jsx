/** @jsx jsx */
import EmblaCarouselReact from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { NextBtn, PrevBtn } from "./Buttons";
import "./styles.css";

const EmblaCarouselComponent = ({ children }) => {
  const [carousel, initCarousel] = useState(null);
  const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false);
  const { theme } = useThemeUI();

  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel]);
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel]);

  useEffect(() => {
    const onSelect = () => {
      togglePrevBtnEnabled(carousel.canScrollPrev());
      toggleNextBtnEnabled(carousel.canScrollNext());
    };
    if (carousel) {
      carousel.on("select", onSelect);
      onSelect();
    }
    return () => carousel && carousel.destroy();
  }, [carousel]);

  return (
    <div className="carousel">
      <div
        className="carousel__wrap"
        sx={{
          backgroundColor: theme.colors.background,
          transition: theme.transition
        }}
      >
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={initCarousel}
          options={{ loop: false }}
          htmlTagName="div"
        >
          <div className="carousel__container">
            {children.map((Child, index) => (
              <div
                sx={{ height: "100%" }}
                className="carousel__item"
                key={index}
              >
                {Child}
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarouselComponent;
