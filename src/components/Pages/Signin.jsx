import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Utilities/Footer";
const Signin = () => {
  return (
    <>
      <header className="login-header">
        <Link to="/">
          <div className="title">
            <h2>Shappey</h2>
            <span>.tech</span>
          </div>
        </Link>
      </header>

      <div className="login-container">
        <div className="form-container">
          <form>
            <h2>SIGN IN HERE</h2>
            <div className="form-inputs">
              <label>
                <input
                  id="login-username"
                  type="text"
                  name="username"
                  autocomplete="off"
                  required
                />
                <span class="border-bottom"></span>
                <span class="input-title">Username</span>
              </label>
              <label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  autocomplete="off"
                  required
                />
                <span class="border-bottom"></span>
                <span class="input-title">Email</span>
              </label>

              <label>
                <input
                  id="login-passwd"
                  type="password"
                  name="password"
                  autocomplete="off"
                  required
                />
                <span class="border-bottom"></span>
                <span class="input-title">Password</span>
              </label>
            </div>
            <button className="btn login-btn">SIGN IN</button>
            <Link className="link" to="/login">
              Already have an account?
            </Link>
          </form>
          <div className="form-img">
            <h1>SHAPPEY</h1>
            <span>.tech</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
