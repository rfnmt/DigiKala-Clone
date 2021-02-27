import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faList,
  faShoppingBasket,
  faPercentage,
  faAward,
  faInfinity,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

//Components
import DigiPlusDropDown from "./DigiPlus/DigiPlusDropDown";
import DigiClubDropDown from "./DigiClub/DigiClubDropDown";
import CategoryDropDown from "./CategoryDropDown/index";

//Styles
import Style from "../../styles/Header.module.css";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <>
      <div className={Style.headerSection} ref={ref}>
        {/* Main Section of Header */}
        <div className={`${Style.mainHeader} ${isSticky ? Style.sticky : ""}`}>
          <div className={Style.logoAndSerach}>
            <div className={Style.logo}>
              <img src="/Logotype-en.svg" alt="لوگوی دیجیکالا" />
            </div>
            <div className={Style.searchSection}>
              <FontAwesomeIcon icon={faSearch} className={Style.serachIcon} />
              <input
                className={Style.searchInput}
                type="text"
                placeholder="جستجو در دیجی‌کالا..."
              />
            </div>
          </div>
          <div className={Style.actionButtons}>
            <div className={Style.LoginButton}>
              <FontAwesomeIcon icon={faUser} className={Style.userIcon} />
              ورود به حساب کاربری
            </div>
            <div className={Style.devider}></div>
            <div className={Style.cartIcon}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        </div>
        {/* Navigation Section */}
      </div>
      <div className={Style.navBar}>
        <div>
          <ul className={Style.navList}>
            <li className={`${Style.catHolder} ${Style.navItem}`}>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faList} />
                  دسته بندی کالاها
                </a>
              </Link>
              <div className={Style.catDropDown}>
                <CategoryDropDown />
              </div>
            </li>
            <div className={Style.devider}></div>
            <li className={Style.navItem}>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  سوپر مارکت
                </a>
              </Link>
            </li>
            <li className={Style.navItem}>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faPercentage} />
                  تخفیف ها و پیشنهاد ها
                </a>
              </Link>
            </li>
            <li className={Style.navItem}>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faAward} />
                  دیجی‌کالای من
                </a>
              </Link>
            </li>
            <li className={Style.navItem}>
              <Link href="#">
                <a>
                  <img src="/digiPlus.svg" alt="دیجی پلاس" />
                  دیجی پلاس
                </a>
              </Link>
              <div className={Style.dropDownContent}>
                <DigiPlusDropDown />
              </div>
            </li>
            <li className={Style.navItem}>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faInfinity} />
                  دیجی کلاب
                </a>
              </Link>
              <div className={Style.dropDownContent}>
                <DigiClubDropDown />
              </div>
            </li>
          </ul>
        </div>
        <div className={Style.citySelect}>
          <p>لطفا شهر و استان خود را انتخاب کنید</p>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </div>
    </>
  );
};

export default Header;
