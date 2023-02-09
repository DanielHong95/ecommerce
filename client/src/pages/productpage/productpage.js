import React from "react";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/productitem/productitem";
import ProductFilter from "../../components/productfilter/productfilter";
import "../productpage/productpage.css";

function ProductPage() {
  const { linkUrl } = useParams();

  return (
    <div className="product-page">
      <div className="header">{linkUrl}</div>
      <div className="body">
        <div className="filter">
          <ProductFilter />
        </div>
        <div className="items">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
