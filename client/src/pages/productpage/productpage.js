import React from "react";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/productitem/productitem";
import ProductFilter from "../../components/productfilter/productfilter";
import "../productpage/productpage.css";

function ProductPage() {
  const { linkUrl } = useParams();

  return (
    <div className="product-page">
      <div className="product-page-header">{linkUrl}</div>
      <div className="product-page-body">
        <div className="product-page-filter">
          <ProductFilter />
        </div>
        <div className="product-page-items">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
