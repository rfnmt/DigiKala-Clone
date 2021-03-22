import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Category.module.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggler = () => {
    setOpen(open ? false : true);
  };

  return (
    <div className={Style.test}>
      {/* Category Tree */}
      <div className={Style.sideBarItemContainer}>
        <p className={Style.sideBarTitle}>دسته بندی نتایج</p>
        <hr />
        <div className={Style.sideBarCateTree}>
          <p>
            <FontAwesomeIcon icon={faChevronLeft} className={Style.chevron} />
            خانه و آشپرخانه
          </p>
          <div>
            <p>
              <FontAwesomeIcon icon={faChevronDown} className={Style.chevron} />
              صوتی و تصویری
            </p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={Style.chevron}
                />
                کنسول بازی
              </p>
              <div>
                <p className={Style.lastChild}>کنسول خانگی</p>
                <p className={Style.lastChild}>کنسول پرتابل</p>
                <p className={Style.lastChild}>لوازم جانبی کنسول</p>
                <p className={Style.lastChild}>گیفت کارت</p>
                <p className={Style.lastChild}>کنسول خانگی</p>
                <p className={Style.lastChild}>بازی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Tree End*/}

      {/* Serach Box */}
      <div className={Style.sideBarItemContainer}>
        <p className={Style.sideBarTitle}>جستجو در نتایج:</p>
        <hr />
        <div className={Style.searchSection}>
          <FontAwesomeIcon icon={faSearch} className={Style.serachIcon} />
          <input
            className={Style.searchInput}
            type="text"
            placeholder="نام محصول یا برند مورد نظر را بنویسید..."
          />
        </div>
      </div>
      {/* Serach Box End */}

      {/* Brand Select */}
      <div className={`${Style.sideBarItemContainer} ${Style.open}`}>
        <p
          style={{ cursor: "pointer", userSelect: "none" }}
          className={Style.sideBarTitle}
          onClick={toggler}
        >
          برند
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${Style.brandSerachChevron} ${
              open ? Style.rotate : ""
            }`}
          />
        </p>
        <div className={`${Style.toggle} ${open ? Style.open : ""}`}>
          <div className={Style.searchSection}>
            <FontAwesomeIcon icon={faSearch} className={Style.serachIcon} />
            <input
              className={Style.searchInput}
              type="text"
              placeholder="جستجوی نام برند..."
            />
          </div>
          <hr />
          <div className={Style.brandList}>
            <ul>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>سونی</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>مایکروسافت</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>نینتندو</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>ایکس باکس</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>لاجیتک</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>تسکو</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>اپل</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>گوگل</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>نیکون</p>
                </label>
              </li>
              <li>
                <label className={Style.singleBrand}>
                  <input type="checkbox" />
                  <span className={Style.checkmark}></span>
                  <p>آمازون</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Brand Select End */}

      {/* Switches Section 1 */}
      <div className={Style.sideBarItemContainer}>
        <div className={Style.switchContainer}>
          <label className={Style.switch}>
            <input type="checkbox" />
            <span className={`${Style.slider} ${Style.round}`}></span>
          </label>
          <p>فقط ارسال فوری</p>
        </div>
      </div>
      {/* Switches Section 2 */}
      <div className={Style.sideBarItemContainer}>
        <div className={Style.switchContainer}>
          <label className={Style.switch}>
            <input type="checkbox" />
            <span className={`${Style.slider} ${Style.round}`}></span>
          </label>
          <p>فقط کالاهای موجود</p>
        </div>
      </div>
      {/* Switches Section 3 */}
      <div className={Style.sideBarItemContainer}>
        <div className={Style.switchContainer}>
          <label className={Style.switch}>
            <input type="checkbox" />
            <span className={`${Style.slider} ${Style.round}`}></span>
          </label>
          <p>فقط کالاهای اصل</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
