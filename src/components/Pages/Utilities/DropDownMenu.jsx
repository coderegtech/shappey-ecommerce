import React from "react";
import { Link } from "react-router-dom";
const DropDownMenu = () => {
  return (
    <div className="dropDown-menu">
      <ul>
        <li>
          <Link className="menu-link" to="#">
            Manage Account
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/myOrders">
            My Orders
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
