import Head from "next/head";

//Components
import Header from "../src/Components/Header";
import FirstSection from "../src/Components/BannersSection/FisrtSection";
import SpecialOffers from "../src/Components/SpecialOffers";
import FourBanners from "../src/Components/BannersSection/FourBannersSection";
import CommonSlider from "../src/Components/Sliders/CommonSlider";
import SingleItemSlider from "../src/Components/Sliders/SingleItemSlider";
import BackToTop from "../src/Components/BackToTop";
import Footer from "../src/Components/Footer";

//Styles
import Styles from "../styles/Home.module.css";

export default function Home({ offers, superMarket, charger, single, mobile }) {
  return (
    <>
      <Header />
      <FirstSection />
      <SpecialOffers data={offers.data} />
      <FourBanners />
      <SpecialOffers data={superMarket.data} />
      <div className={Styles.twoSlidersContainer}>
        <div className={Styles.bigSlider}>
          <CommonSlider data={charger.data} />
        </div>
        <div className={Styles.smallSlider}>
          <SingleItemSlider data={single.data} />
        </div>
      </div>
      <FourBanners />
      <div className={Styles.commonSlidersContainer}>
        <CommonSlider data={mobile.data} />
      </div>
      <div className={Styles.commonSlidersContainer}>
        <CommonSlider data={charger.data} />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const offers = await fetch(`${process.env.BASE_URL}/api/special-offers`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  }).then((res) => res.json());

  const superMarket = await fetch(
    `${process.env.BASE_URL}/api/super-market-offers`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  ).then((res) => res.json());

  const charger = await fetch(`${process.env.BASE_URL}/api/charger`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  }).then((res) => res.json());

  const single = await fetch(`${process.env.BASE_URL}/api/single`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  }).then((res) => res.json());

  const mobile = await fetch(`${process.env.BASE_URL}/api/mobile`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  }).then((res) => res.json());

  return {
    props: { offers, superMarket, charger, single, mobile },
  };
}
