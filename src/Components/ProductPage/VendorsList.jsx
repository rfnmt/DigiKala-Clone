import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faTruck,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Product.module.css";

const VendorsList = () => {
  return (
    <div className={Style.vendorsList}>
      <h3>لیست فروشندگان این کالا</h3>
      <div className={Style.vendor}>
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
          <FontAwesomeIcon icon={faTruck} />
          <div>
            <p>ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faCheckDouble} />
          <div>
            <p>گارانتی ۲۴ ماهه سریر</p>
          </div>
        </div>
        <div className={Style.row}>
          <div className={Style.price}>
            <p>
              ۲۸,۲۷۰,۰۰۰
              <span> تومان</span>
            </p>
          </div>
        </div>
        <div className={Style.row}>
            <button>
                افزودن به سبد
            </button>
        </div>
      </div>
      <div className={Style.vendor}>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faStoreAlt} />
          <div>
            <p>عصر بازی</p>
            <p>
              <span className={Style.secondaryText}>عملکرد: 5 از 5</span> |
              <span className={Style.secondaryText}> 80% رضایت از کالا</span>
            </p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faTruck} />
          <div>
            <p>ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faCheckDouble} />
          <div>
            <p>گارانتی ۲۴ ماهه سریر</p>
          </div>
        </div>
        <div className={Style.row}>
          <div className={Style.price}>
            <p>
              ۲۸,۲۷۰,۰۰۰
              <span> تومان</span>
            </p>
          </div>
        </div>
        <div className={Style.row}>
            <button>
                افزودن به سبد
            </button>
        </div>
      </div>
      <div className={Style.vendor}>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faStoreAlt} />
          <div>
            <p>سروش تجارت</p>
            <p>
              <span className={Style.secondaryText}>عملکرد: 5 از 5</span> |
              <span className={Style.secondaryText}> 80% رضایت از کالا</span>
            </p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faTruck} />
          <div>
            <p>ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
          </div>
        </div>
        <div className={Style.row}>
          <FontAwesomeIcon icon={faCheckDouble} />
          <div>
            <p>گارانتی ۲۴ ماهه سریر</p>
          </div>
        </div>
        <div className={Style.row}>
          <div className={Style.price}>
            <p>
              ۲۸,۲۷۰,۰۰۰
              <span> تومان</span>
            </p>
          </div>
        </div>
        <div className={Style.row}>
            <button>
                افزودن به سبد
            </button>
        </div>
      </div>
    </div>
  );
};

export default VendorsList;
