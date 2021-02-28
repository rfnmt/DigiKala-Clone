import Head from "next/head";

//Components
import Header from "../src/Components/Header";
import FirstSection from "../src/Components/BannersSection/FisrtSection";
import SpecialOffers from "../src/Components/SpecialOffers";
import FourBanners from "../src/Components/BannersSection/FourBannersSection";

//Styles
import styles from "../styles/Home.module.css";

export default function Home({ offers }) {
  return (
    <>
      <Header />
      <FirstSection />
      <SpecialOffers offers={offers.data.offers} />
      <FourBanners />
      <div className={styles.container}></div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/special-offers");
  const offers = await res.json();

  return {
    props: { offers },
  };
}
