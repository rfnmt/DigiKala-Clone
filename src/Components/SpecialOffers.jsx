import React from "react";
import Link from "next/link";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

//Components
import Slider from "./Sliders/SpecialOffersSlider";

// Helper
import {baseUrl} from '../Helper/Config'

//Styles
import Styles from "../../styles/SpecialOffers.module.css";

const SpecialOffers = ({ data }) => {
  return (
    <section
      className={
        data.color === "red" ? Styles.containerRed : Styles.containerGreen
      }
    >
      <div className={Styles.main}>
        <div className={Styles.firstCol}>
          <Link href={`${baseUrl}/category`}>
            <a>
              <img src={data.mainPic} alt="" />
            </a>
          </Link>
          <Link href={`${baseUrl}/category`}>
            <a>
              <div className={Styles.btn}>
                <p>مشاهده همه</p>
                <div>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={Styles.btnIcon}
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={Styles.slideContainer}>
          <Slider offers={data.offers} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
