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
      document.getElementById('dialogboxbody').innerHTML = "SafeRoute is a search engine that allows you to search for non-gender conforming restrooms. We recognize an opportunity to help transgender people find places to comfortably utilize public restrooms without the threat of harassment. In addition, this service is beneficial for those attending to children or people people with disabilities.";

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

    function cancel () {
      document.getElementById('signin').style.display = 'none';
      document.getElementById('dialogoverlay').style.display = 'none';
      document.getElementById('searchfield').style.display = 'flex';
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");

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
        document.getElementById('searchfield').style.display = 'none';
        document.getElementById('signuphead').innerHTML = "Sign Up";
      }
    
    }

    function cancel2 () {
      document.getElementById('signUp').style.display = 'none';
      document.getElementById('dialogoverlay').style.display = 'none';
      document.getElementById('searchfield').style.display = 'flex';
    }
    
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

{/* About Dialog Box ========================================================================================================================== */}
    
    <div id ="dialogoverlay"></div>
      <div id= "dialogbox" style ={{transform: "translateY(-70px)"}}>
        <div>
          <div id ="dialogboxhead"></div>
          <div id ="dialogboxbody"></div>
          <div id ="dialogboxfoot">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>

{/* Sign In Dialog Box======================================================================================================================= */}
    
    <div className="Login" id= "signin" style = {{color: "yellow"}}>
      <div style = {{backgroundColor: "rgb(0, 128, 0, .75)"}}>
      <div id ="signinhead" style = {{fontSize: "30px", transform: "translateY(5px)"}}></div>
          <div id ="signinbody">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email" style = {{transform: "translateY(-12px)"}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            id = "sie"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" style = {{transform: "translateY(-8px)"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id = "sip"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} style = {{transform: "translate(200px, 12px)"}}>
          Login
        </Button>
        <button onClick={cancel} style = {{transform: "translate(210px, 12px)"}}>Close</button>
      </Form>
      </div>
    </div>
    </div>

{/* Sign Up Dialog Box ====================================================================================================================================== */}
    
    <div className="sigup" id= "signUp" style = {{color: "yellow"}}>
      <div style = {{backgroundColor: "rgb(0, 128, 0, .75)"}}>
      <div id ="signuphead" style = {{fontSize: "30px", transform: "translateY(10px)"}}></div>
          <div id ="signupbody">
          <Form.Group size="lg" controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            id = "suf"
            type="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            id = "sul"
            type="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id = "sue"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id = "sup"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button  id="signupfoot" block size="lg" type="submit" disabled={!validateForm()} style = {{transform: "translate(200px, 12px)"}}>
          Login
        </Button>
        <button onClick={cancel2} style = {{transform: "translate(210px, 12px)"}}>Close</button>
      </Form>
      </div>
    </div>
    </div>
     
      <div style={style2} id = "searchfield">
        <SearchField />
      </div>
   
    </div>
  );
}

export default Navbar;
