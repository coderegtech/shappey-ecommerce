import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../../Pages/Utilities/ProductModal";
import { selectAllProducts } from "./productsSlice";
const Products = () => {
  const products = useSelector(selectAllProducts);
  const [selectedProductId, setSelectedProductId] = useState();
  const [openModal, setOpenModal] = useState(false);

  const selectProduct = (productId) => {
    setSelectedProductId(productId);
    setOpenModal(true);
  };

  return (
    <>
      {products.map(
        ({ productId, productImgUrl, productDescription, productPrice }) => {
          return (
            <div
              onClick={() => selectProduct(productId)}
              key={productId}
              className="items"
            >
              <div className="item-img-box">
                <img src={productImgUrl} alt="" />
              </div>
              <div className="item-content">
                <p>{productDescription.substring(0, 50)}...</p>

                <div className="item-footer">
                  <span className="price">
                    <i className="fa-solid fa-peso-sign"></i> {productPrice}
                  </span>
                  <div className="rate">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
      {openModal ? (
        <ProductModal
          productId={selectedProductId}
          onClose={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default Products;
