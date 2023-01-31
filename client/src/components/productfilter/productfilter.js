import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../productfilter/productfilter.css";

//mock data
const data = {
  style: [
    "American-Style Lager",
    "Light Lager",
    "American Amber/Red Lager",
    "Blonde Ale, American Blonde Ale",
  ],
};

function CollectionFilter() {
  const [products, setProducts] = useState([]);
  const { linkUrl } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const getProducts = await axios.get(`http://localhost:5000/${linkUrl}/`);
      setProducts(getProducts.data);
    }
    console.log(products);
    fetchProducts();
  }, []);

  let marketSet = new Set();
  let typeSet = new Set();
  let sizeSet = new Set();
  for (let i = 0; i < products.length; i++) {
    marketSet.add(products[i].market);
    typeSet.add(products[i].type);
    sizeSet.add(products[i].size);
  }
  const market = Array.from(marketSet);
  const type = Array.from(typeSet);
  const size = Array.from(sizeSet);

  console.log(market);
  console.log(type);
  console.log(size);

  const data = {
    market: market,
    type: type,
    size: size,
  };

  return (
    <div className="collection-filter">
      {Object.keys(data).map((type) => (
        <FilterGroup key={type} type={type} filters={data[type]} />
      ))}
    </div>
  );
}

const FilterGroup = ({ type, filters }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="filter-group">
      <div className="collapsible" onClick={() => setShow(!show)}>
        <span>{type}</span>
        <KeyboardArrowDownIcon />
      </div>

      {show &&
        filters.map((filter) => (
          <CustomCheckbox key={filter} filter={filter} />
        ))}
    </div>
  );
};

const CustomCheckbox = ({ filter }) => {
  return (
    <div className="filter-checkbox">
      <Checkbox className="checkbox" size="md" colorScheme="blackAlpha">
        {filter}
      </Checkbox>
    </div>
  );
};

export default CollectionFilter;
