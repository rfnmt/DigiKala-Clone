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

//Styles
import Styles from "../../styles/SpecialOffers.module.css";

const SpecialOffers = ({ offers }) => {
  // console.log(offers);
  return (
    <section className={Styles.container}>
      <div className={Styles.main}>
        <div className={Styles.firstCol}>
          <Link href="#">
            <a>
              <img src="/SpecialOffers.png" alt="" />
            </a>
          </Link>
          <Link href="#">
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
          <Slider offers={offers} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
