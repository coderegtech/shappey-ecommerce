import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import profile from "../../../assets/images/profile.jpeg";
import DropDownMenu from "./DropDownMenu";
const Header = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const menuRef = useRef(null);

  useEffect(() => {
    const toggleDropDownMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropDownMenu(false);
      }
    };

    document.addEventListener("mousedown", toggleDropDownMenu);
  });

  const SearchItem = (e) => {
    navigate(`/search/itemname=${e.target.value}`);
  };
  return (
    <header>
      <Link to="/">
        <div className="title">
          <h2>Shappey</h2>
          <span>.tech</span>
        </div>
      </Link>
      <div className={`searchbar ${searchBarActive ? "active" : ""}`}>
        <form>
          <input type="text" placeholder="Search..." onKeyUp={SearchItem} />
          <button type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div className="nav" ref={menuRef}>
        <div className="toggle-search">
          <span className="search" onClick={() => setSearchBarActive(true)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="exit" onClick={() => setSearchBarActive(false)}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <span>{cartItems.length}</span>
        </div>
        {/* <div className="user">
          <button type="button" className="btn login-btn">
            <Link to="/login">LOGIN</Link>
          </button>
          <button type="button" className="btn signin-btn">
            <Link to="/signin">SIGN IN</Link>
          </button>
        </div> */}
        <div
          className="toggle-menu"
          onClick={() => setSideMenuActive(!sideMenuActive)}
        >
          {sideMenuActive ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        {/* <SideMenu /> */}
        <div className={`account  ${dropDownMenu ? "active" : ""}`}>
          <div
            className="user-profile"
            onClick={() => setDropDownMenu(!dropDownMenu)}
          >
            <img src={profile} alt="" />
            <p>
              Reygun
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </p>
          </div>

          <DropDownMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
