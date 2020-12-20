// import logo from './logo.svg';
import './App.css';
import React from "react";
import SearchForm from "./components/SearchForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import background from "./img/belinda-fewings-6wAGwpsXHE0-unsplash.jpg";
// import SearchPage from './Components/SearchPage.js';

function App() {

  document.title="Safe Route";

  const style = {
    backgroundImage: "url(https://images.unsplash.com/photo-1533745848184-3db07256e163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  };
  const style2 ={
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    
    <Router>
    <div container-fluid App-header className="App" style={style}>
    <Navbar />
    <div style={style2}>
      <header className="App-header">
        {/* <SearchPage /> */}
      </header>
      <SearchForm />
      </div>
    </div>
    </Router>
  );
}

export default App;
