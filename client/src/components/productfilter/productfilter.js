import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../productfilter/productfilter.css";

//mock data
const data = {
  category: ["Beers", "Wines", "Spirits"],
};

const CollectionFilter = () => {
  return (
    <div className="collection-filter">
      {Object.keys(data).map((type) => (
        <FilterGroup key={type} type={type} filters={data[type]} />
      ))}
    </div>
  );
};

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
