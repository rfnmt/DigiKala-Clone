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

const SellDetails = () => {
  return (
    <div className={Style.sellInfo}>
      <div className={Style.sellInfoHeader}>
        <p>فروشنده</p>
      </div>
      <div className={Style.vendorInfo}>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faStoreAlt} />
          <div>
            <p>کانن تهران</p>
            <p>
              <span className={Style.secondaryText}>عملکرد: 5 از 5</span> |
              <span className={Style.secondaryText}> 80% رضایت از کالا</span>
            </p>
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
            <p>
              <span className={Style.secondaryText}>
                ارسال دیجی‌کالا از ۱ روز کاری دیگر
              </span>
            </p>
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

export default SellDetails;
