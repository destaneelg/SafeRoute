import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import SearchForm from "../SearchField";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  function CustomAlert() {
    this.render = function (){

  // alert("Button was clicked");

      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH + "px";
      dialogbox.style.left = (winW/2) -(550 * .5) + "px";
      dialogbox.style.top = "100px";
      dialogbox.style.display="block";
      document.getElementById('dialogboxhead').innerHTML = "About SafeRoute";
      document.getElementById('dialogboxbody').innerHTML = "Summary information";
    }

   
  }
    function close () {
      document.getElementById('dialogbox').style.display = 'none';
      document.getElementById('dialogoverlay').style.display = 'none';
    }
  

  var Alert = new CustomAlert();

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div>
        <ul className="navbar-nav">

        <Link className="navbar-brand" to="/" id= "title" style = {{color: "black", fontSize: "240%", textDecoration: "none", fontWeight: "bold"}}>
        Safe Route
        </Link>
            <Link
              to="/about" id = "about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              style = {{fontSize: "80%", textDecoration: "none"}} onClick= {Alert.render}
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
            <div id="note" style={{fontStyle:"italic", color: "black", fontWeight: "bold"}}>
              or
            </div>
        </ul>
      </div>
      
    </nav>
    
    <div id ="dialogoverlay"></div>
      <div id= "dialogbox">
        <div>
          <div id ="dialogboxhead"></div>
          <div id ="dialogboxbody"></div>
          <div id ="dialogboxfoot">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
