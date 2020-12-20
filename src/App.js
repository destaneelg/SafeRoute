// import logo from './logo.svg';
import './App.css';
import React from "react";
import SearchForm from "./SearchForm";
// import background from "./img/belinda-fewings-6wAGwpsXHE0-unsplash.jpg";
// import SearchPage from './Components/SearchPage.js';

function App() {

  const style = {
    backgroundImage: "url(https://images.unsplash.com/photo-1533745848184-3db07256e163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  }

  return (
    <div container-fluid App-header className="App" style = {style}>
      <header className="App-header">
        {/* <SearchPage /> */}
      </header>
      <SearchForm />
      
    </div>
  );
}

export default App;
