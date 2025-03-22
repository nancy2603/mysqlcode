import React from "react";
import "../styles/Card.css";

function Card({
  title,
  text,
  width = "500px",
  height = "350px",
  src = "", alt ="" 
}) {
  return (
    <div className="card" style={{ width, height }}>
      <img src={src} alt={alt} />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;