//ya tyo uta export gareko kura import garxau
const connection = require("./connection");

//now through express framework , hamilea API banaunu parxa
//API middle component which helps in giving excess
//API like messanger that moves data
const express = require("express");
//export garim mathi
const bodyParser = require("body-parser");
//bodyparser ni banaim,
//This line creates an instance of the Express application. The express() function returns an Express application object that you can use to define routes, set up middleware, and configure other aspects of your web application. The app variable is a conventionally used name for this instance, but you could name it something else if you prefer.
var app = express();
//middleware .middleware, which is used to parse the incoming request bodies in Express. body-parser is now part of the Express package in newer versions of Express, so you may not need this line separately. It's used to parse JSON, URL-encoded, and other types of data sent in the request body.

//app.use ma chai bodyparser(middleware) lai use garena thau & .json chai postman bata aaunea data ko formate ko lagi
app.use(bodyParser.json());
//to run in any port we use
app.listen(3000, () => {
  console.log("EXPPRESS SERVER IS RUNNING ON PORT 3000");
});

//ihave used my sql and created table
//to fatch that data get
//we use getapp to get (METHOD , GET, POSt etc)
app.get("/employee/:id", (req, res) => {
  //req jo hamro requet bata data aaudaix
  //res ki j hami response ma send garxam
  connection.query(
    "SELECT * FROM employee WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(rows);
        res.send(rows);
      }
    }
  );
});

app.get("/employee", (req, res) => {
  //req jo hamro requet bata data aaudaix
  //res ki j hami response ma send garxam
  connection.query("SELECT * FROM employee", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(rows); yo garda ya muni terminal ma sql ko data dekhauxa
      res.send(rows); //yo garda hamro port ma sql ko data dekhauxa
    }
  });
});

//delete ma tya method lai DELETE lehnea postman ma
app.delete("/employee/:id", (req, res) => {
  //req jo hamro requet bata data aaudaix
  //res ki j hami response ma send garxam
  connection.query(
    "DELETE FROM employee WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(rows);
        res.send(rows);
      }
    }
  );
});

//insert garnu paryo
//post
// app.post("/employee", (req, res) => {
//   //req jo hamro requet bata data aaudaix
//   //res ki j hami response ma send garxam
//   var emp = req.body; //yo k ho bhanea tyo post man ma hamilea data cadaunea ani tyo gayera database ma basxa . either from params (url ) bata else .body bata
//   connection.query(
//     "INSERT INTO employee (id, name, salary) values(?)",
//     [emp],
//     (err, rows) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(rows); yo garda ya muni terminal ma sql ko data dekhauxa
//         res.send(rows); //yo garda hamro port ma sql ko data dekhauxa
//       }
//     }
//   );
// });
app.post("/employee", (req, res) => {
  var emp = req.body;
  connection.query(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [emp.name, emp.salary], // Extract values from emp object
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
//for individual updates
app.patch("/employee", (req, res) => {
  var emp = req.body;
  connection.query(
    "UPDATE employee SET name=?, salary=? WHERE id=?",
    [emp.name, emp.salary, emp.id], // Extract values from emp object
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

//if more than one data to be uploaded then we  use PUT method
app.put("/employee", (req, res) => {
  var emp = req.body;
  connection.query(
    "UPDATE employee SET name=?, salary=? WHERE id=?",
    [emp.name, emp.salary, emp.id], // Extract values from emp object
    (err, updateResult) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else if (updateResult.affectedRows === 0) {
        // If no rows were updated, it means the record doesn't exist, so we insert a new record
        connection.query(
          "INSERT INTO employee (name, salary) VALUES (?, ?)",
          [emp.name, emp.salary],
          (err, insertResult) => {
            if (err) {
              console.log(err);
              res.status(500).send(err.message);
            } else {
              res.send(insertResult);
            }
          }
        );
      } else {
        res.send(updateResult);
      }
    }
  );
});
//yadi id veto vani change gardinxa but if naya id mistakely ni deam bhaneni naya banaidinxa
