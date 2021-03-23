import React from "react";

//Components
import Header from "../src/Components/Header";
import BackToTop from "../src/Components/BackToTop";
import Footer from "../src/Components/Footer";
import CategoryBody from "../src/Components/Category";

// Helper
import { baseUrl } from "../src/Helper/Config";

export default function Category({ items }) {
  return (
    <>
      <Header />
      <CategoryBody title={items.data.title} products={items.data.products} />
      <BackToTop />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const items = await fetch(`${baseUrl}/api/game-category`).then((res) =>
    res.json()
  );

  return {
    props: { items },
  };
}