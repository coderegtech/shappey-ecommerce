import React from "react";
import laptopbanner from "../../assets/images/laptopbanner.webp";
import Products from "../redux/products/Products.jsx";
import Footer from "./Utilities/Footer";
import Header from "./Utilities/Header";
import NewProductsSlider from "./Utilities/NewProductsSlider";
const Main = () => {
  return (
    <>
      <Header />

      <div className="showcase">
        <div className="showcase-content">
          <h1>Most Affordable Gaming Laptop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            voluptatum.
          </p>

          <button className="btn" type="button">
            SHOP NOW
          </button>
        </div>

        <div className="showcase-image">
          <img src={laptopbanner} alt="" />
        </div>
        <svg
          className="bg-waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff3300"
            fillOpacity="1"
            d="M0,192L40,186.7C80,181,160,171,240,186.7C320,203,400,245,480,229.3C560,213,640,139,720,106.7C800,75,880,85,960,112C1040,139,1120,181,1200,170.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="new-products">
        <NewProductsSlider />
      </div>

      <div className="shop">
        <div className="header">
          <h2>Top Products</h2>
        </div>
        <div className="products">
          <Products />
        </div>

        <div className="pagination">
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      <div className="message">
        <span>
          <i class="fa-brands fa-facebook-messenger"></i>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Main;
