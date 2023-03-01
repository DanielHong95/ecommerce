import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductInfo from "../../components/productinfo/productinfo";

function ProductInfoPage() {
  const { linkUrl, id } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    async function fetchProductById() {
      const getProduct = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/${linkUrl}/${id}`
      );
      setProductInfo(getProduct.data);
    }
    fetchProductById();
  }, [id, linkUrl]);

  if (productInfo === undefined) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <ProductInfo
        key={id}
        id={productInfo.id}
        name={productInfo.name}
        brand={productInfo.brand}
        price={productInfo.price}
        size={productInfo.size}
        abv={productInfo.abv}
        year={productInfo.year}
        type={productInfo.type}
        style={productInfo.style}
        category={productInfo.category}
        market={productInfo.market}
        varietal={productInfo.varietal}
        country={productInfo.country}
        state={productInfo.state}
        city={productInfo.city}
        region={productInfo.region}
        appellation={productInfo.appellation}
        taste={productInfo.taste}
        body={productInfo.body}
        product_info={productInfo.product_info}
        image_url={productInfo.image_url}
      />
    </div>
  );
}

export default ProductInfoPage;
