import React from "react";
import guitar from "../../images/guitar-pics.png";
import { Link } from "react-router-dom";
const Product = () => {
  const id = 1;
  return (
    <div className="product__item shadow p-3 mb-5 rounded">
      <div className="product__img mb-4">
        <img src={guitar} alt="product__img" className="" />
      </div>
      <div className="product__name mb-3">
        <h5>Name of product</h5>
        <span>
          Learn how to apply advanced guitar techniques to play even the most
          complicated orchestra pieces
        </span>
      </div>
      <div className="product__desc">
        <span>4.5</span>
        <span>275</span>
        <span>Advanced</span>
      </div>
      <div className="product__btn">
        <Link to={`/courses/${id}`}>
          <button>Learn More</button>
        </Link>
        <span>$20</span>
      </div>
    </div>
  );
};

export default Product;
