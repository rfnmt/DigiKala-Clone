import React, { useState, useRef } from "react";
import ReactImageZoom from "react-image-zoom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareAlt,
  faBell,
  faChartBar,
  faEllipsisH,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Product.module.css";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activePic, setActivePic] = useState(
    "http://localhost:3000/SingleProduct/02.jpg"
  );

  const show = () => {
    setShowModal(showModal ? false : true);
    document.body.style.overflow = showModal ? "scroll" : "hidden";
  };

  const target = useRef();

  const avtivePic = (e) => {
    // Loop through 'target' child nodes and remove "active" class from images
    Object.entries(target.current.childNodes).map((item) => {
      item[1].childNodes[0].classList.remove("Product_active__2CAO4");
    });
    // Add class "active" to clicked image
    e.target.classList.add("Product_active__2CAO4");
    setActivePic(e.target.src);

    console.log(e.target.src);
  };

  const props = {
    width: 400,
    height: 400,
    zoomPosition: "left",
    zoomWidth: 500,
    zoomLensStyle:
      "background: hsla(353, 85%, 58%, 0.11); border: 1px solid #ef394e; border-radius: 5px; cursor: crosshair;",
    zoomStyle:
      "left: -100px;  width: 600px; box-shadow: 0 2px 17px 0 rgb(0 0 0 / 9%); border-radius: 10px; background-color: #fff;",
    img: "/SingleProduct/01.jpg",
  };

  const modalProps = {
    width: 400,
    height: 400,
    zoomPosition: "original",
    zoomStyle: "cursor: crosshair;",
    img: activePic ? activePic : "/SingleProduct/02.jpg",
  };
  return (
    <div>
      <div className={Style.gallery}>
        <div className={Style.iconsContainer}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={faHeart} />
            <span className={Style.tooltip}>افزودن به علاقمندی</span>
          </div>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={faShareAlt} />
            <span className={Style.tooltip}>اشتراک گذاری</span>
          </div>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={faBell} />
            <span className={Style.tooltip}>اطلاع رسانی شگفت انگیز</span>
          </div>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={faChartBar} />
            <span className={Style.tooltip}>نمودار قیمت</span>
          </div>
        </div>
        <div className={Style.bigPic}>
          <ReactImageZoom {...props} />
        </div>
      </div>
      <div className={Style.smallPicsContainer}>
        <div className={Style.smallPicPreview} onClick={show}>
          <img src="/SingleProduct/02.jpg" alt="" />
        </div>
        <div className={Style.smallPicPreview}>
          <img src="/SingleProduct/03.jpg" alt="" onClick={show} />
        </div>
        <div className={Style.smallPicPreview}>
          <img src="/SingleProduct/04.jpg" alt="" onClick={show} />
        </div>
        <div className={Style.smallPicPreview}>
          <img src="/SingleProduct/05.jpg" alt="" onClick={show} />
        </div>
        <div className={Style.smallPicPreview}>
          <img src="/SingleProduct/06.jpg" alt="" onClick={show} />
          <FontAwesomeIcon icon={faEllipsisH} className={Style.threeDots} />
        </div>
      </div>

      <div
        className={`${Style.modalContainer} ${
          showModal ? Style.showModal : ""
        }`}
        onClick={show}
      >
        <div className={Style.modal} onClick={(e) => e.stopPropagation(e)}>
          <div className={Style.modalHeader}>
            <p>تصاویر رسمی</p>
            <FontAwesomeIcon
              icon={faTimes}
              className={Style.closeIcon}
              onClick={show}
            />
          </div>
          <div className={Style.modalGallery}>
            <div className={Style.modalBigPic}>
              <ReactImageZoom {...modalProps} />
            </div>
            <div className={Style.modalSmallPicContainer}>
              <h3>
                مجموعه کنسول بازی سونی مدل PlayStation 5 ظرفیت 825 گیگابایت به
                همراه دسته اضافی
              </h3>
              <div
                className={Style.modalSmallPicSelect}
                onClick={(e) => avtivePic(e)}
                ref={target}
              >
                <div className={Style.modalSmallPic}>
                  <img
                    src="/SingleProduct/02.jpg"
                    alt=""
                    className={Style.active}
                  />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/03.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/04.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/05.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/06.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/07.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/08.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/09.jpg" alt="" />
                </div>
                <div
                  className={Style.modalSmallPic}
                  onClick={(e) => avtivePic(e)}
                >
                  <img src="/SingleProduct/10.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
