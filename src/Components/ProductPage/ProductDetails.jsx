import React from "react";
import Link from "next/link";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Product.module.css";

const ProductDetails = () => {
  return (
    <div className={Style.productInfo}>
      <div className={Style.details}>
        <div className={Style.meta}>
          <p>
            <span>سونی</span> / <span>کنسول خانگی سونی</span>
          </p>
        </div>
        <h2>
          مجموعه کنسول بازی سونی مدل PlayStation 5 ظرفیت 825 گیگابایت به همراه
          دسته اضافی
        </h2>
        <div className={Style.detailsBody}>
          <div className={Style.statics}>
            <p>
              <FontAwesomeIcon icon={faStar} />
              4.4
            </p>
            <FontAwesomeIcon icon={faCircle} />
            <p>
              <Link href="#">
                <a>68 دیدگاه کاربران</a>
              </Link>
            </p>
            <FontAwesomeIcon icon={faCircle} />
            <p>
              <Link href="#">
                <a>40 پرسش و پاسخ</a>
              </Link>
            </p>
          </div>
          <div className={Style.features}>
            <h4>ویژگی های کالا</h4>
            <p>
              <FontAwesomeIcon icon={faCircle} />
              تعداد دسته: 2
            </p>
            <p>
              <FontAwesomeIcon icon={faCircle} />
              بازی: ندارد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
