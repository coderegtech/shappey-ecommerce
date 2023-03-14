import React, { useState, useEffect } from "react";
import { selectAllProducts } from "../../redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../redux/cart/cartSlice";
import moment from "moment";
const ProductModal = ({ productId, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);

  const { productImgUrl, productDescription, productPrice } = products.find(
    (product) => product.productId === productId
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="products-modal" onClick={(e) => e.stopPropagation()}>
        <div className="img-box">
          <img src={productImgUrl} alt="" />
        </div>
        <div className="products-details">
          <span className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <p className="product-desc">{productDescription}</p>
          <span className="product-price">
            <i className="fa-solid fa-peso-sign"></i>
            {productPrice}
          </span>
          <div className="product-rate">
            <div>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p className="rate">1k Ratings</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <div className="btns">
              <span onClick={() => setQuantity(quantity - 1)}>
                <i className="fa-solid fa-minus"></i>
              </span>
              <span>{quantity < 1 ? 1 : quantity}</span>
              <span onClick={() => setQuantity(quantity + 1)}>
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
          <div className="modal-btns">
            <button type="button">Buy Now</button>
            <button
              type="button"
              onClick={() =>
                dispatch(
                  addCartItem({
                    user_uid: new Date().toISOString(),
                    productImgUrl: productImgUrl,
                    productDescription: productDescription,
                    productPrice: productPrice,
                    productQuantity: quantity,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
