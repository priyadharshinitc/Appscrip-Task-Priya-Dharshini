import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";

import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [like, setLike] = useState({});

  const handleLike = (id) => {
    setLike(prev => ({
      ...prev, [id]: !prev[id]
    }));
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log("Error Fetching Data: ", err));
  }, []);

  return (
    <div className="productList">
      {
        products.map((product) => {
          return (
            <div key={product.id} className="productList__product">
              <img src={product.image} alt={product.title} className="productList__productImage" />
              <div className="productList__productDesc">
                <h3 className="productList__productTitle">{product.title}</h3>
                {like[product.id] ? <FaHeart className="likeHeart active" onClick={() => handleLike(product.id)} /> : <FaRegHeart className="likeHeart" onClick={() => handleLike(product.id)} />
                }                
              </div> 
              <p className="productList__productPrice">Rs. {product.price}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default ProductList;