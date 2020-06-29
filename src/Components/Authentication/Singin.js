import React from "react";
import { Link } from "react-router-dom";
// import Lady from "../../assets/shot1.jpg";

const Signin = () => {
  return (
    <div className="sign-in">
      <div className="lady-img"></div>
      <div className="btn-group">
        <button className="btn google">
          <Link to={"/dashboard/products"} className="link">
            Sign in with Google
          </Link>
        </button>
        <button className="btn facebook">Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Signin;
