import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Administrator from "./components/Pages/Admin/Administrator";
import Dashboard from "./components/Pages/Admin/Pages/Dashboard";
import Messages from "./components/Pages/Admin/Pages/Messages";
import Orders from "./components/Pages/Admin/Pages/Orders";
import Products from "./components/Pages/Admin/Pages/Products";
import Users from "./components/Pages/Admin/Pages/Users";
import Cart from "./components/Pages/Cart";
import ErrorPage from "./components/Pages/ErrorPage";
import Login from "./components/Pages/Login";
import Main from "./components/Pages/Main";
import MyOrders from "./components/Pages/MyOrders";
import SearchItemsPage from "./components/Pages/SearchItemsPage";
import Signin from "./components/Pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="search/:item" element={<SearchItemsPage />} />
          </Route>

          <Route path="/admin" element={<Administrator />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
