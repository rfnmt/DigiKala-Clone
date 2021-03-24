import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faCheckDouble,
  faBoxes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Product.module.css";

const ProductDetailsAll = () => {
  return (
    <div className={Style.allContainer}>
      <div className={Style.allDetails}>
        <h3 className={Style.allDetailsTitle}>مشخصات کالا</h3>
        {/* Data Section */}
        <div className={Style.allDetailsSection}>
          <div className={Style.allDetailsSectionTitle}>مشخصات کلی</div>
          <div className={Style.allDetailsSectionData}>
            <div className={Style.dataRow}>
              <p>ابعاد</p>
              <p>260x105x390 میلی‌متر</p>
            </div>
            <div className={Style.dataRow}>
              <p>وزن</p>
              <p>4500 گرم</p>
            </div>
            <div className={Style.dataRow}>
              <p>نوع درایو بازی</p>
              <p>Ultra HD Blu-ray, up to 100GB/disc</p>
            </div>
          </div>
        </div>

        {/* Data Section */}
        <div className={Style.allDetailsSection}>
          <div className={Style.allDetailsSectionTitle}>پردازشگر</div>
          <div className={Style.allDetailsSectionData}>
            <div className={Style.dataRow}>
              <p>پردازشگر اصلی CPU</p>
              <p>AMD Ryzen Zen 8 Cores 3.5GHz</p>
            </div>
            <div className={Style.dataRow}>
              <p>پردازشگر گرافیکی GPU</p>
              <p>Ray Tracing Acceleration Up to 2.23 GHz (10.3 TFLOPS)</p>
            </div>
            <div className={Style.dataRow}>
              <p>حافظه RAM</p>
              <p>16GB GDDR6/256-bit</p>
            </div>
            <div className={Style.dataRow}>
              <p>کارت گرافیک</p>
              <p>AMD Radeon RDNA 2-based graphics engine</p>
            </div>
          </div>
        </div>

        {/* Data Section */}
        <div className={Style.allDetailsSection}>
          <div className={Style.allDetailsSectionTitle}>سایر قابلیت ها</div>
          <div className={Style.allDetailsSectionData}>
            <div className={Style.dataRow}>
              <p>هارد دیسک</p>
              <p>بله</p>
            </div>
            <div className={Style.dataRow}>
              <p>ظرفیت هارد دیسک</p>
              <p>825 گیگابایت</p>
            </div>
            <div className={Style.dataRow}>
              <p>دسته بی سیم</p>
              <p>بله</p>
            </div>
            <div className={Style.dataRow}>
              <p>بازی</p>
              <p>ندارد</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Box */}
      <div className={Style.buyBox}>
        <div className={Style.buyBoxTitle}>
          <div className={Style.buyBoxPic}>
            <img src="/SingleProduct/01.jpg" alt="" />
          </div>
          <h4>
            مجموعه کنسول بازی سونی مدل PlayStation 5 ظرفیت 825 گیگابایت به همراه
            دسته اضافی
          </h4>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faStoreAlt} />
          <div>
            <p>کانن تهران</p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faCheckDouble} />
          <div>
            <p>گارانتی ۲۴ ماهه سریر</p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faBoxes} />
          <div>
            <p>موجود در انبار فروشنده</p>
          </div>
        </div>
        <div className={Style.priceInfo}>
          <p>
            <FontAwesomeIcon icon={faInfoCircle} />
            بهترین قیمت 30 روز گذشته
          </p>
        </div>
        <div className={Style.price}>
          <p>
            ۲۸,۲۷۰,۰۰۰
            <span> تومان</span>
          </p>
        </div>
        <div className={Style.buyButton}>
          <button>افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsAll;
