import React from "react";
import Profile from "../../assets/profile.png";
const Header = () => {
  return (
    <nav>
      <ul className="left">
        <li>Makeup</li>
      </ul>

      <ul className="right">
        <li>
          <img src={Profile} alt="profile" className="profile-img" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
