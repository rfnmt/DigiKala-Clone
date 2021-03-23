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

// Helper
import { baseUrl } from "../src/Helper/Config";

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
  const offers = await fetch(`${baseUrl}/api/special-offers`).then((res) =>
    res.json()
  );

  const superMarket = await fetch(
    `${baseUrl}/api/super-market-offers`
  ).then((res) => res.json());

  const charger = await fetch(`${baseUrl}/api/charger`).then((res) =>
    res.json()
  );

  const single = await fetch(`${baseUrl}/api/single`).then((res) => res.json());

  const mobile = await fetch(`${baseUrl}/api/mobile`).then((res) => res.json());

  return {
    props: { offers, superMarket, charger, single, mobile },
  };
}
