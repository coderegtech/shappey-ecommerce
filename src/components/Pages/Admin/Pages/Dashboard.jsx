import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/productsSlice";
const Dashboard = () => {
  const products = useSelector(selectAllProducts);
  return (
    <div className="dashboard-item">
      <div className="dashboard">
        <div className="item">
          <p>Products</p>
          <span>999, 999</span>
        </div>
        <div className="item">
          <p>Orders</p>
          <span>999, 999</span>
        </div>
        <div className="item">
          <p>Users</p>
          <span>999, 999</span>
        </div>
        <div className="item">
          <p>Messages</p>
          <span>999, 999</span>
        </div>
      </div>
      <div className="dashboard-cols">
        <div className="table"></div>
        <Calendar className="calendar" />
      </div>
    </div>
  );
};

export default Dashboard;
