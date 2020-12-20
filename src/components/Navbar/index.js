import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SearchForm from "../SearchForm";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div>
        <ul className="navbar-nav">

        <Link className="navbar-brand" to="/" id= "title" style = {{color: "white", fontSize: "180%", textDecoration: "none"}}>
        Safe Route
      </Link>
            <Link
              to="/" id = "signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
            >
              Sign Up
            </Link>
            <Link
              to="/favorites" id = "favorites"
              className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
              style = {{color: "white", fontSize: "130%", textDecoration: "none"}}
            >
              Favorites
            </Link>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
