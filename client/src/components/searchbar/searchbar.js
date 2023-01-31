import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const getProducts = await axios.get(`http://localhost:5000/products/`);
      setProducts(getProducts.data);
    }
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const onSearch = (id, category) => {
    let path = `/content/${category}/${id}`;
    navigate(path);
    setValue(id, category);
    console.log("search ", id, category);
  };

  return (
    <Autocomplete
      id="products"
      disableClearable
      getOptionLabel={(option) => option.name}
      options={products}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onSearch("1", "beers");
        }
      }}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Products"
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: "#fff" }}
        />
      )}
    />
  );
}

export default SearchBar;
