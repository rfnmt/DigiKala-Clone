import React from "react";

//Components
import Header from "../src/Components/Header";
import BackToTop from "../src/Components/BackToTop";
import Footer from "../src/Components/Footer";
import CategoryBody from "../src/Components/Category";

export default function Category({ items }) {
  return (
    items && items.data && (
      <>
        <Header />
        <CategoryBody title={items.data.title} products={items.data.products} />
        <BackToTop />
        <Footer />
      </>
    )
  );
}

export async function getStaticProps() {
  const items = await fetch(`${process.env.BASE_URL}/api/game-category`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  }).then((res) => res.json());

  return {
    props: { items },
  };
}
