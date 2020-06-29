import React from "react";
import Profile from "../../assets/profile.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <NavLink to="/" className="link">
            Makeup
          </NavLink>
        </li>
      </ul>

      <ul className="right">
        <li>
          <img src={Profile} alt="profile" className="profile-img" />
        </li>
        <li>
          <NavLink to="/likes" className="link">
            Likes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
