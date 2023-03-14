import React from "react";
import Footer from "./Utilities/Footer";
import Header from "./Utilities/Header";
const SearchItemsPage = () => {
  return (
    <>
      <Header />
      <div className="search-items-container">
        {/* Items list */}
        <ul className="items-list">
          <li>
            <div className="search-img-cont">
              <img
                src="https://liliputing.com/wp-content/uploads/2018/12/stealth_01.jpg"
                alt=""
              />
            </div>
            <div className="search-item-content">
              <p className="item-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                magnam? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nobis, magnam?
              </p>
              <span className="item-price">
                <i className="fa-solid fa-peso-sign"></i>
                <p>89,000</p>
              </span>
              <button className="add-to-cart" type="button">
                Add to cart
              </button>
            </div>
          </li>
          <li>
            <div className="search-img-cont">
              <img
                src="https://liliputing.com/wp-content/uploads/2018/12/stealth_01.jpg"
                alt=""
              />
            </div>
            <div className="search-item-content">
              <p className="item-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                magnam? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nobis, magnam?
              </p>
              <span className="item-price">
                <i className="fa-solid fa-peso-sign"></i>
                <p>89,000</p>
              </span>
              <button className="add-to-cart" type="button">
                Add to cart
              </button>
            </div>
          </li>
          <li>
            <div className="search-img-cont">
              <img
                src="https://liliputing.com/wp-content/uploads/2018/12/stealth_01.jpg"
                alt=""
              />
            </div>
            <div className="search-item-content">
              <p className="item-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                magnam? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nobis, magnam?
              </p>
              <span className="item-price">
                <i className="fa-solid fa-peso-sign"></i>
                <p>89,000</p>
              </span>
              <button className="add-to-cart" type="button">
                Add to cart
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default SearchItemsPage;
