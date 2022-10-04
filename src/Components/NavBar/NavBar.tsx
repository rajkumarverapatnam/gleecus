import React, { useState } from "react";
import mobLogo from "../../Assets/Images/mobLogo.jpeg";
import logo1a from "../../Assets/Images/logo1a.jpeg";
import logo2a from "../../Assets/Images/logo2a.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [toggleClass, setToggleClass] = useState(false);
  const handleNavBar = (): void => {
    console.log("check");
    setToggleClass((toggleClass) => !toggleClass);
    console.log(toggleClass);
  };

  return (
    <div className="nav-menu">
      <img src={mobLogo} alt="logo1" className="mobLogo" />
      <nav className={`${toggleClass ? "navBar" : "toggleClass"} mobNav`}>
        <div className="nav-left">
          <img src={logo1a} alt="logo1" />
          <ul className="nav-items">
            <li>
              Clincal <i className="fa fa-caret-down" aria-hidden="true"></i>
            </li>
            <li>
              <Link to="/GraphDesign">User Graph</Link>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </li>

            <li>
              <Link to="/TableDesign">User Table</Link>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <img src={logo2a} alt="logo2" />
          <ul className="nav-items">
            <li>
              <i className="fa fa-bell" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </nav>
      <i className="fa fa-bars" aria-hidden="true" onClick={handleNavBar}></i>
    </div>
  );
}
