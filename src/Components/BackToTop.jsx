import React from "react";
import Link from "next/link";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

//Styles
import Styles from "../../styles/BackToTop.module.css";

const backToTop = () => {
  return (
    <div className={Styles.backToTop}>
      <Link href="#top">
        <a>
          <div className={Styles.backToTopIcon}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <p>برگشت به بالا</p>
        </a>
      </Link>
    </div>
  );
};

export default backToTop;
