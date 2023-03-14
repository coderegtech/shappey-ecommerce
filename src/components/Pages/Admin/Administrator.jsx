import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/admin.css";
import SideMenu from "./Utilities/SideMenu";
const Administrator = () => {
  return (
    <>
      <header className="admin-header">
        <Link to="/">
          <div className="title">
            <h2>Shappey</h2>
            <span>.tech</span>
          </div>
        </Link>
        <div className="admin">
          <img src="../../../Images/profile.jpeg" alt="" />
          <span>Admin</span>
        </div>
      </header>
      <div className="dashboard-container">
        <SideMenu />

        <Outlet />
      </div>
    </>
  );
};

export default Administrator;
