import React from "react";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="menu">
        <Link className="menu-list" to="dashboard">
          Dashboard{" "}
        </Link>
        <Link className="menu-list" to="products">
          Products{" "}
        </Link>
        <Link className="menu-list" to="orders">
          Orders{" "}
        </Link>
        <Link className="menu-list" to="users">
          Users{" "}
        </Link>
        <Link className="menu-list" to="messages">
          Messages{" "}
        </Link>
        <Link className="menu-list" to="settings">
          Settings
        </Link>
      </ul>

      <div className="logout-btn">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default SideMenu;
