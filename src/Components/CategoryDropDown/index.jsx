import React, { useState } from "react";
import Link from "next/link";

//Components
import Digital from "./Digital";
import Car from "./Car";

// Helper
import {baseUrl} from '../../Helper/Config'

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
          <div
            className={
              active === true ? Style.catListItemActive : Style.catListItem
            }
          >
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
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
            <Link href={`${baseUrl}/category`}>
              <a>ورزش و سفر</a>
            </Link>
            <div className={Style.subCat}>
              <Digital />
            </div>
          </div>
    </div>
  );
};

export default CategoryDropDown;
