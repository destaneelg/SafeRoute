import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import SearchField from "../SearchField";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
//CSS for SearchFiled
  const style2 ={
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  }
//About Prompt Functions =========================================================================

  function CustomAlert() {
    this.render = function (){

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
      document.getElementById('searchfield').style.display = 'none';
    }
   
  }
    function close () {
      document.getElementById('dialogbox').style.display = 'none';
      document.getElementById('dialogoverlay').style.display = 'none';
      document.getElementById('searchfield').style.display = 'flex';
    }
    var Alert = new CustomAlert();

//Sign In Prompt Functions============================================================
  
    function SignIn() {
      this.render = function (){
  
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var signIn = document.getElementById('signin');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        signIn.style.left = (winW/2) -(550 * .5) + "px";
        signIn.style.top = "100px";
        signIn.style.display="block";
        document.getElementById('signinhead').innerHTML = "Sign In";
        document.getElementById('searchfield').style.display = 'none';
      }
    }

    // function login () {
    //   document.getElementById('signin').style.display = 'none';
    //   document.getElementById('dialogoverlay').style.display = 'none';
    //   document.getElementById('searchfield').style.display = 'flex';
    // }
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

    
    var signIn = new SignIn();

//Sign Up Prompt Functions==============================================================================

    function SignUp() {
      this.render = function (){
  
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var signUp = document.getElementById('signUp');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        signUp.style.left = (winW/2) -(550 * .5) + "px";
        signUp.style.top = "100px";
        signUp.style.display="block";
        document.getElementById('signuphead').innerHTML = "Sign Up";
        document.getElementById('searchfield').style.display = 'none';
      }
    }

    // function register () {
    //   document.getElementById('signUp').style.display = 'none';
    //   document.getElementById('dialogoverlay').style.display = 'none';
    //   document.getElementById('searchfield').style.display = 'flex';
    // }
    
    var signUp = new SignUp();
//React HTML portion =================================================================================================================================
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
            style = {{fontSize: "80%", textDecoration: "none"}} onClick={signUp.render}
            >
              Sign Up
            </Link>
            <Link
              to="/signIn" id = "signIn"
              className={window.location.pathname === "/signIn" ? "nav-link active" : "nav-link"}
              style = {{fontSize: "80%", textDecoration: "none"}} onClick= {signIn.render}
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
      <div className="Login" id= "signin">
      <div id ="signinhead"></div>
          <div id ="signinbody">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      </div>
    </div>
      {/* <div id= "signUp">
        <div>
          <div id ="signuphead"></div>
          <div id ="signupbody">
          <form>
            <label for="fname">First name </label>
            <input type="text" id="fname" name="fname" value="" /><br />
            <label for="lname">Last name  </label>
            <input type="text" id="lname" name="lname" value="" /><br />
            <label for="uname">Username </label>
            <input type="text" id="uname" name="uname" value="" /><br />
            <label for="pswd">Password  </label>
            <input type="text" id="pswd" name="pswd" value="" />
          </form>
          </div>
          <div id ="signupfoot">
            <button onClick={register}>Register</button>
            <button onClick={register} style = {{marginLeft: "4px"}}>Cancel</button>
          </div>
        </div>
      </div> */}
     
      <div style={style2} id = "searchfield">
        <SearchField />
      </div>
   
    </div>
  );
}

export default Navbar;
