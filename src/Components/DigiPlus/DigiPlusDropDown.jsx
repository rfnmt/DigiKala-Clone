import React from "react";
import Link from "next/link";

//Styles
import Style from "../../../styles/Header.module.css";

const DigiPlusDropDown = () => {
  return (
    <>
      <div className={Style.digiPlus}>
        <div>
          <p>
            خدمات ویژه کاربران
            <img
              className={Style.DigiPlusLogo}
              src="/DigiPlus/DigiPlusLogo.svg"
              alt=" لوگوی دیجی پلاس"
            />
          </p>
          <p>
            ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا ۳۰ روز پس
            از تحویل
          </p>
          <p>
            <Link href="#">
              <a className="blueLink">
                اطلاعات بیشتر و عضویت <span>&#10097;</span>
              </a>
            </Link>
          </p>
          <hr />
          <p>
            <Link href="#">
              <a>
                کالاهای
                <img
                  className={Style.DigiPlusLogo}
                  src="/DigiPlus/DigiPlusLogo.svg"
                  alt=" لوگوی دیجی پلاس"
                />
              </a>
            </Link>
          </p>
        </div>
        <div>
          <img
            className={Style.DigiPlusBanner}
            src="/DigiPlus/DigiPlusBanner.jpg"
            alt="دیجی پلاس"
          />
        </div>
      </div>
    </>
  );
};

export default DigiPlusDropDown;
