import React from "react";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/productitem/productitem";
import ProductFilter from "../../components/productfilter/productfilter";

function ProductPage() {
  const { linkUrl } = useParams();

  return (
    <div>
      <div>{linkUrl}</div>
      <ProductFilter />
      <ProductItems />
    </div>
  );
}

export default ProductPage;
