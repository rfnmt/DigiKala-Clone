import React from "react";

//Styles
import Style from "../../../styles/Header.module.css";

const Car = () => {
  return (
    <>
      <div>
        <p className={Style.catTitle}>
          همه دسته بندی های وسایل نقلیه و صنعتی <span>&#10097;</span>
        </p>
      </div>
      <div className={Style.subCatCols}>
        <div className={Style.subCatCol}>
          <p className={Style.catTitle}>
            خودروهای ایرانی و خارجی <span>&#10097;</span>
          </p>
          <p className={Style.catTitle}>
            موتور سیکلت <span>&#10097;</span>
          </p>
          <p className={Style.catTitle}>
            لوازم جانبی خودرو و موتورسیکلت <span>&#10097;</span>
          </p>
          <p>لوازم تزیینی</p>
          <p>سیستم صوتی و تصویری</p>
          <p>نظافت و نگهداری خودرو</p>
          <p>کلاه کاسکت و لوازم جانبی موتور</p>
          <p className={Style.catTitle}>
            لوازم یدکی خودرو و موتور سیکلت <span>&#10097;</span>
          </p>
          <p>دیسک صفحه و کلاچ</p>
          <p>جلوبندی و تعلیق</p>
          <p>چراغ خودرو</p>
          <p>تسمه خودرو</p>
          <p>کمک فنر</p>
        </div>
        <div className={Style.subCatCol}>
          <p className={Style.catTitle}>
            لوازم مصرفی خودرو و موتور سیکلت <span>&#10097;</span>
          </p>
          <p>لاستیک و تایر</p>
          <p>لنت ترمز</p>
          <p>روغن موتور و ضدیخ</p>
          <p>مکمل سوخت و روغن و انواع فیلتر</p>
          <p className={Style.catTitle}>
            ابزار برقی <span>&#10097;</span>
          </p>
          <p>دریل، پیچ گوشتی برقی و شارژی</p>
          <p>فرز و سنگ رومیزی</p>
          <p>موتور برق</p>
          <p>مکنده و دمنده</p>
          <p>کارواش</p>
          <p>کمپرسور و جک خودرو</p>
          <p>ابزار همه کاره برقی و شارژی</p>
        </div>
        <div className={Style.subCatCol}>
          <p className={Style.catTitle}>
            ابزار غیر برقی <span>&#10097;</span>
          </p>
          <p>ابزار دستی</p>
          <p>مجموعه ابزار</p>
          <p>نردبان</p>
          <p>پیچ گوشتی و فازمتر</p>
          <p>نظم دهنده ابزار</p>
          <p>متر، تراز، اندازه گیری دقیق</p>
          <p>لوازم روانکاری</p>
          <p>چسب صنعتی</p>
          <p className={Style.catTitle}>
            لوازم و یراق آلات ساختمانی <span>&#10097;</span>
          </p>
          <p>شیرآلات</p>
          <p>رنگ</p>
          <p>دستگیره در</p>
        </div>
        <div className={Style.subCatCol}>
          <p className={Style.catTitle}>
            لوازم باغبانی <span>&#10097;</span>
          </p>
          <p>قیچی، چاقو و ابزار باغبانی</p>
          <p>بذر و تخم گیاهان</p>
          <p>تبر، بیل و کلنگ</p>
          <p>خاک، کود و آفت کش</p>
          <p className={Style.catTitle}>
            نور و روشنایی <span>&#10097;</span>
          </p>
          <p>لوستر و آباژور</p>
          <p>لامپ</p>
          <p>چندراهی برق و محافظ ولتاژ</p>
          <p className={Style.catTitle}>
            تجهیزات ایمنی و کار <span>&#10097;</span>
          </p>
          <p>کفش ایمنی</p>
          <p className={Style.catTitle}>
            حفاظتی و امنیتی <span>&#10097;</span>
          </p>
          <p>گاوصندوق</p>
        </div>
      </div>
    </>
  );
};

export default Car;
