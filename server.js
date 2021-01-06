const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3030;

const db = mysql.createPool({
  host:"localhost",
  user: "root",
  password:"",
  database:"UserDatabase"
})



// app.post("/api/insert",  (req, res) => {
//   const sqlInsert = "INSERT INTO User (login, password) VALUES (? , ?)";
//    db.query(sqlInsert, [login, password],  (err, result) => {
      
//    } )
// })

app.listen(PORT, () => {
  console.log("server running")
});