import React from "react";

//Components
import Slider from "../Sliders/FisrtSectionSlider";

//Styles
import Styles from "../../../styles/Banner.module.css";

const FisrtSection = () => {
  return (
    <div className={Styles.mainSection}>
      <article>
        <div className={Styles.firstCol}>
          <Slider />
        </div>
        <div className={Styles.secondCol}>
          <div>
            <img src="/Banners/smallBanner01.jpg" alt="محصولات دارویی" title="محصولات دارویی" />
          </div>
          <div>
            <img src="/Banners/smallBanner02.jpg" alt="دیجی استایل" title="دیجی استایل" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default FisrtSection;
