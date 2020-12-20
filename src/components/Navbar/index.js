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

        <Link className="navbar-brand" to="/" id= "title" style = {{color: "black", fontSize: "240%", textDecoration: "none", fontWeight: "bold"}}>
        Safe Route
        </Link>
            <Link
              to="/about" id = "about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              style = {{fontSize: "80%", textDecoration: "none"}}
            >
              About
            </Link>
            <Link
              to="/" id = "signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            style = {{fontSize: "80%", textDecoration: "none"}}
            >
              Sign Up
            </Link>
            <Link
              to="/signIn" id = "signIn"
              className={window.location.pathname === "/signIn" ? "nav-link active" : "nav-link"}
              style = {{fontSize: "80%", textDecoration: "none"}}
            >
              Sign In
            </Link>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
