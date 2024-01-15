import React from "react";
import "./ProductDisplay.css";
import StarIcon from "../Assets/star_icon.png";
import StarDullIcon from "../Assets/star_dull_icon.png";

function ProductDisplay(props) {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            src={product.image}
            className="product-display-main-img"
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
            <div className="product-display-right-price-old">{product.old_price}</div>
            <div className="product-display-right-price-new">{product.new_price}</div>
        </div>
        <div className="product-display-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas voluptatibus minima culpa. Quibusdam dignissimos laborum voluptates recusandae commodi magnam facere harum? Voluptatem facilis in dignissimos corrupti aliquid corporis autem delectus sunt, deserunt molestiae.
        </div>
      </div>
    </div>
  );
  
}

export default ProductDisplay;
