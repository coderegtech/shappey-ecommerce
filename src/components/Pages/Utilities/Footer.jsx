import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <div>
            <p>CUSTOMER SERVICE</p>

            <ul>
              <li>Help Center</li>
              <li>Shappey Cares PH</li>
              <li>Payment Methods</li>
              <li>ShappeyPay</li>
              <li>Shappey Coins</li>
              <li>Order Tracking</li>
              <li>Free Shipping</li>
              <li>Return & Refund</li>
              <li>Shappey Guarantee</li>
              <li>Overseas Product</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p>ABOUT SHAPPEY</p>

            <ul>
              <li>About Us</li>
              <li>Shappey Blog</li>
              <li>Shappey Careers</li>
              <li>Shappey Policies</li>
              <li>Privacy Policy</li>
              <li>Shappey Mail</li>
              <li>Seller Center</li>
              <li>Flash Deels</li>
              <li>Media Contact</li>
            </ul>
          </div>
          <div>
            <p>FOLLOW US</p>

            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="footer-form-cont">
          <form>
            <span>send us feedback:</span>

            <input type="text" placeholder="Enter Email..." />
            <button type="button">Send</button>
          </form>
          <div className="payment-methods">
            <span>Payment Methods:</span>

            <ul>
              <li>
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://getcash.ph/wp-content/uploads/2021/01/Transparent-1280-x-720.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://www.cebumassive.com/content/imgs/brand-paymaya.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 CoderegTech. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
