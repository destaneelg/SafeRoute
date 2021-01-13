var mysql = require('mysql');
const bcrypt = require('bcrypt');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'purpleR0s',
    database : 'UserDatabase',
    debug    :  false,
    port: process.env.DB_PORT
}); 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  console.log('connected as id ' + connection.threadId);
});
exports.register = async function(req,res){
  const password = req.body.password;

  var users={
     "email":req.body.email,
     "password":await bcrypt.hash(password, 10)
   }
  
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
      }
  });
}

exports.login = async function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      if(results.length >0){
        const comparision = await bcrypt.compare(password, results[0].password)
        if(comparision){
            res.send({
              "code":200,
              "success":"login sucessfull"
            })
        }
        else{
          res.send({
               "code":204,
               "success":"Email and password does not match"
          })
        }
      }
      else{
        res.send({
          "code":206,
          "success":"Email does not exits"
            });
      }
    }
    });
}