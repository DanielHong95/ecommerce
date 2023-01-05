import React from "react";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/productitem/productitem";

function ProductPage() {
  const { linkUrl } = useParams();

  return (
    <div>
      <div>{linkUrl}</div>
      <ProductItems />
    </div>
  );
}

export default ProductPage;
