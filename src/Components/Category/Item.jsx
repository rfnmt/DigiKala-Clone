import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStore } from "@fortawesome/free-solid-svg-icons";

// Helper
import farsiNumber from "../../Helper/FarsiNumber";

//Styles
import Style from "../../../styles/Category.module.css";

const Item = ({ data }) => {
  const finalPrice = (price, discount) => {
    let result = price - price * (discount / 100);
    return farsiNumber(result);
  };

  return (
    <Link href="http://localhost:3000/product">
      <a className={Style.singleItem}>
        <div className={Style.offerImageContainer}>
          <img src={data.src} alt="" />
        </div>
        <div>
          <p className={Style.offerTitle}>{data.name}</p>
        </div>
        <div className={Style.offerPriceSection}>
          {data.discount !== 0 ? (
            <>
              <del>{farsiNumber(data.price)}</del>
              <div className={Style.discount}>
                {`${farsiNumber(data.discount)}%`}
              </div>
            </>
          ) : (
            data.votes && (
              <div className={Style.rateContainer}>
                <p>{`(${farsiNumber(data.votes)}) ${data.rate}`}</p>
                <FontAwesomeIcon icon={faStar} className={Style.rateStar} />
              </div>
            )
          )}
          <div className={Style.finalPrice}>
            {finalPrice(data.price, data.discount)}
            <span>تومان</span>
          </div>
        </div>
        <div className={Style.vendor}>
          <FontAwesomeIcon icon={faStore} className={Style.vendorIcon} />
          <p>{`فروشنده: ${data.seller}`}</p>
        </div>
      </a>
    </Link>
  );
};

Item.propTypes = {
  data: PropTypes.object,
};

export default Item;
