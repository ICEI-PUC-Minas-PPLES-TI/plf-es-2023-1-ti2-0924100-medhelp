var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM agendamento", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });