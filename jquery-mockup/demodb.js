var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Metallica1",
    database: "timeclocktestdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM employeestest", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
});