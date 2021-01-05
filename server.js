const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: '3306',
  database: "UserDatabase"
});

const app = express();
const PORT = process.env.PORT || 3030;
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  
  // Express only serves static assets in production
  console.log('NODE_ENV: ', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('/', (req, res) => {
      res.sendFile(path.resolve('client/build', 'index.html'));
    });
  }

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
