import React, { useState } from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import Styles from "../../../styles/Slides.module.css";

const FisrtSectionSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={Styles.fisrtSectionSlider}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={Styles.leftArrow}
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className={Styles.rightArrow}
        onClick={nextSlide}
      />
      {data.map((slide, index) => {
        return (
          <div
            className={index === current ? Styles.slideActive : Styles.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.src}
                alt={slide.alt}
                className={Styles.sliderImage}
                title={slide.alt}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    id: 1,
    src: "/Banners/BigBanner01.jpg",
    alt: "پریل",
  },
  {
    id: 1,
    src: "/Banners/BigBanner02.gif",
    alt: "خونه تکونی",
  },
  {
    id: 1,
    src: "/Banners/BigBanner03.jpg",
    alt: "پریل",
  },
];

export default FisrtSectionSlider;
