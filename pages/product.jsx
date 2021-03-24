import React from "react";

//Components
import Header from "../src/Components/Header";
import BackToTop from "../src/Components/BackToTop";
import Footer from "../src/Components/Footer";
import Gallery from "../src/Components/ProductPage/Gallery";
import ProductDetails from "../src/Components/ProductPage/ProductDetails";
import SellDetails from "../src/Components/ProductPage/SellDetails";
import VendorsList from "../src/Components/ProductPage/VendorsList";
import ProductDetailsAll from "../src/Components/ProductPage/ProductDetailsAll";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../styles/Product.module.css";

const product = () => {
  return (
    <>
      <Header />
      <div className={Style.productPage}>
        <div className={Style.meta}>
          <p>
            <span>دیجی‌کالا</span> / <span>خانه و آشپزخانه</span> /{" "}
            <span>صوتی و تصویری</span> / <span>کنسول بازی</span> /{" "}
            <span>کنسول خانگی</span>
          </p>
          <p>
            کالای خود را در دیجی‌کالا بفروشید
            <FontAwesomeIcon icon={faStore} className={Style.storeIcon} />
          </p>
        </div>
        <div className={Style.firstSection}>
          <Gallery />
          <ProductDetails />
          <SellDetails />
        </div>
        <VendorsList />
        <ProductDetailsAll />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default product;
