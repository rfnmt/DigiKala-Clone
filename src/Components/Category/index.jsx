import React from "react";
import StickyBox from "react-sticky-box";
import PropTypes from "prop-types";

//Components
import SideBar from "./SideBar";
import Item from "./Item";

//Styles
import Style from "../../../styles/Category.module.css";

const CategoryBody = ({ title, products }) => {
  return title && products ? (
    <div className={Style.container}>
      <aside className={Style.sideBarContainer}>
        <StickyBox offsetTop={100} offsetBottom={20}>
          <SideBar />
        </StickyBox>
      </aside>
      <div className={Style.main}>
        <div className={Style.pageTitle}>
          <p>{`${title ? title : "یافت نشد"}`}</p>
          <p>{`${products ? products.length : 0} کالا`}</p>
        </div>
        <div className={Style.itemsContainer}>
          {products.map((product, index) => (
            <Item key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

CategoryBody.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};

export default CategoryBody;
