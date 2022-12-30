import React from "react";
import HomeItems from "../../components/homeitems/homeitems.js";
import ProductCarousel from "../../components/productcarousel/productcarousel";

function HomePage() {
  return (
    <div>
      <ProductCarousel />
      <HomeItems />
    </div>
  );
}

export default HomePage;
