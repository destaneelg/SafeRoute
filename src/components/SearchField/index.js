import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchField(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language" style={{paddingRight: "10px", fontSize: "120%"}}>Search Restrooms</label>
        <input
          style={{borderRadius: "15px", width: "230px", height:"30px", padding: "2px", fontStyle: "italic"}}
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Austin,TX"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchField;
