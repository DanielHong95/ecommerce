import React from "react";
import { Link } from "react-router-dom";
import "../homecard/homecard.css";

function HomeCard({ id, label, imageUrl, linkUrl }) {
  return (
    <div className="home-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Link
          to={linkUrl}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="content"
        >
          <div className="label">{label.toUpperCase()}</div>
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
