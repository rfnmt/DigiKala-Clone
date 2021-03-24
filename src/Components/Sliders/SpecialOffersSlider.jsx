import React, { Component, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

//Helper
import farsiNumber from "../../Helper/FarsiNumber";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//Styles
import Styles from "../../../styles/Slides.module.css";

class SpecialOffersSlider extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 4 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
  }

  render() {
    const { offers } = this.props;

    return (
      <Carousel breakPoints={this.breakPoints} isRTL={true} pagination={false}>
        {offers.map((offer) => (
          <div key={offer.id} className={Styles.offersItem}>
            <Item offer={offer} />
          </div>
        ))}
      </Carousel>
    );
  }
}

const Item = ({ offer }) => {
  const [time, setTime] = useState(offer.time);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    timer(time);

    return () => setTime(0);
  }, [time]);

  const finalPrice = (price, discount) => {
    let result = price - price * (discount / 100);
    return farsiNumber(result);
  };

  const timer = (time) => {
    let miliSeconds;
    miliSeconds = time * (60 * 60 * 1000);
    setInterval(() => {
      miliSeconds = miliSeconds - 1000;

      setHours(
        farsiNumber(
          Math.floor((miliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        )
      );
      setMinutes(
        farsiNumber(Math.floor((miliSeconds % (1000 * 60 * 60)) / (1000 * 60)))
      );
      setSeconds(farsiNumber(Math.floor((miliSeconds % (1000 * 60)) / 1000)));
    }, 1000);
  };

  return (
    <>
      <div className={Styles.offerImageContainer}>
        <img src={offer.src} alt="" />
      </div>
      <div>
        <p className={Styles.offerTitle}>{offer.name}</p>
      </div>
      <div className={Styles.offerPriceSection}>
        <del>{farsiNumber(offer.price)}</del>
        <div className={Styles.discount}>
          {`${farsiNumber(offer.discount)}%`}
        </div>
        <div className={Styles.finalPrice}>
          {finalPrice(offer.price, offer.discount)}
          <span>تومان</span>
        </div>
      </div>
      <div className={Styles.timer}>
        <p>{`${hours} : ${minutes} : ${seconds}`}</p>
        <FontAwesomeIcon icon={faClock} />
      </div>
    </>
  );
};

export default SpecialOffersSlider;
