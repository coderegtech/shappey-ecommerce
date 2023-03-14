import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/cart/cartSlice";
import Footer from "./Utilities/Footer";
import Header from "./Utilities/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [selectAllitems, setSelectAllitems] = useState(false);
  return (
    <>
      <Header />

      <div className="cart-container">
        <div className="cart-list">
          <div className="selectall-items">
            <span>
              <input type="checkbox" />
              <p>Select All </p>
            </span>
            <span>
              <i className="fa-solid fa-trash"></i>
              Delete
            </span>
          </div>
          <div className="cart-items-list">
            {cartItems?.map(
              ({
                id,
                productId,
                productImgUrl,
                productDescription,
                productPrice,
                productQuantity,
              }) => {
                return (
                  <div key={productId} className="cart-item">
                    <input type="checkbox" />
                    <img src={productImgUrl} alt="" className="item-img" />

                    <div className="item-cols">
                      <p className="item-descrp">
                        {productDescription.substring(0, 50)}...
                      </p>
                      <span className="item-price">
                        <i className="fa-solid fa-peso-sign"></i>
                        <p>{productPrice}</p>

                        <div
                          className="delete-item"
                          onClick={() => dispatch(deleteItem(id))}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </div>
                      </span>
                    </div>

                    <div className="quantity">
                      <div className="btns">
                        <span
                          onClick={() =>
                            dispatch({ type: "DECREMENT", id: productId })
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span>
                          {/* {state.count < 1
                            ? 1
                            : state.count > 10
                            ? 10
                            : state.count} */}
                          {productQuantity}
                        </span>
                        <span
                          onClick={() =>
                            dispatch({ type: "INCREMENT", id: productId })
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="cart-summary">
          <h1>Order Summary</h1>
          <div className="cart-summary-cols">
            <div>
              <p>Subtotal (0 items)</p>
              <span>
                <i className="fa-solid fa-peso-sign"></i>
                0.00
              </span>
            </div>
            <div>
              <p>Shipping Fee </p>
              <span>
                <i className="fa-solid fa-peso-sign"></i>
                50.00
              </span>
            </div>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <span>
              <i className="fa-solid fa-peso-sign"></i>
              0.00
            </span>
          </div>
          <button className="proccedbtn" type="button">
            Procced to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
