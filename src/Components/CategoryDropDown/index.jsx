import React, { useState } from "react";
import Link from "next/link";

//Components
import Digital from "./Digital";
import Car from "./Car";

//Styles
import Style from "../../../styles/Header.module.css";

const CategoryDropDown = (props) => {
  const [active, setActive] = useState(true);

  const activate = () => {
    setActive(false);
  };

  const deactivate = () => {
    setActive(true);
  };

  return (
    <div className={Style.catContent}>
      <Link href="http://localhost:3000/category">
        <a>
          <div
            className={
              active === true ? Style.catListItemActive : Style.catListItem
            }
          >
            <Link href="#">
              <a>کالای دیجیتال</a>
            </Link>
            <div
              className={Style.subCat}
              style={{ display: `${active === true ? "block" : "none"}` }}
            >
              <Digital />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>خودرو</a>
            </Link>
            <div className={Style.subCat}>
              <Car />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>مد و پوشاک</a>
            </Link>
            <div className={Style.subCat}>
              <Digital />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>اسباب بازی، کودک و نوزاد</a>
            </Link>
            <div className={Style.subCat}>
              <Car />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>خوردنی و آشامیدنی</a>
            </Link>
            <div className={Style.subCat}>
              <Digital />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>زیبایی و سلامت</a>
            </Link>
            <div className={Style.subCat}>
              <Car />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>خانه و آشپزخانه</a>
            </Link>
            <div className={Style.subCat}>
              <Digital />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>کتاب، لوازم التحریر و هنر</a>
            </Link>
            <div className={Style.subCat}>
              <Car />
            </div>
          </div>
          <div
            className={Style.catListItem}
            onMouseOver={activate}
            onMouseLeave={deactivate}
          >
            <Link href="#">
              <a>ورزش و سفر</a>
            </Link>
            <div className={Style.subCat}>
              <Digital />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CategoryDropDown;
