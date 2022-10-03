import React from "react";
import logo1a from "../../Assets/Images/logo1a.jpeg";
import logo2a from "../../Assets/Images/logo2a.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="nav-menu">
      <nav className="navBar">
        <div className="nav-left">
          <img src={logo1a} alt="logo1" />
          <ul>
            <li>
              Clincal <i className="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
              <Link to="/GraphDesign">User Graph</Link>
            </li>
            {/* <li>
              <Link to="/GraphDesign">Foo</Link>
            </li> */}
            <li>
              <Link to="/TableDesign">User Table</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <img src={logo2a} alt="logo2" />
          <ul>
            <li>
              <i className="fa fa-bell" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
