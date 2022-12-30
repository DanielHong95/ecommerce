import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ProductCard({ id, name, price, size, image }) {
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { linkUrl } = useParams();

  // post favorites
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("http://localhost:5000/favorites", {
          description: "poop",
        });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <div>
      <Link to={`/content/${linkUrl}/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>{name}</div>
      <div>{size}</div>
      <div>{price}</div>
      <button>Add to Cart</button>
      <div>
        <FavoriteIcon />
      </div>
    </div>
  );
}

export default ProductCard;
