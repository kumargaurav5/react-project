import { LOGO_URL } from "../utlis/contants";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Cart</li>
          <li>Cart</li>
          <li>Cart</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" 
              ? setbtnName("Logout") 
              : setbtnName("Login"); 
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
