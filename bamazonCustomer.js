var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
var connection = mysql.createConnection({
  host: "localhost",

  // when using MAMP port on my pc it currently is 8889
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  console.log("database connected!!!");
});
connection.query("SELECT * from products", function(error, results, fields) {
  if (error) throw error;
  console.table(results);
  getIdAndQuantity();
});
function getIdAndQuantity() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the ID of the item you want to buy???"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many do you want to buy??"
      }
    ])
    .then(function(input) {
      console.log(input);
    });
}
function checkStock() {
  //   connection.query("SELECT * from products", function(error, results, fields) {
  //     if (error) throw error;
  //     console.table(results);
  //     getIdAndQuantity();
  //   });
  // look at making a function
  // UPDATE <table name> SET <row name and new value> WHERE item_id=
  // update is used to change values of existing data/cell
  // need to change product items and quantities to new options from what Michael sent
  // will go over this in next tutor session so that i can be better for project 2
}
