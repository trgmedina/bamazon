//Requiring modules
var mysql = require("mysql");
var inquirer = require("inquirer");
var config = require('./config.js');

//Configuring a connection with localhost
var dbConnection = mysql.createConnection(config);

//Establishing a connection and starting the application
dbConnection.connect(function(err) {
  if (err) throw err;
  productSearch();
});

//shows all ID, Products, Department, and Price of all products
var productSearch = function() {
  var query = "SELECT * FROM products";
  dbConnection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " || Product Name: " + res[i].product_name
          + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + 
          "|| Quantity: " + res[i].stock_quantity);
    }
    purchaseProduct();
  });
};

// function to get products 
var purchaseProduct = function() {
  // query the database for all products
  dbConnection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // once you have the items, prompt the user for which product they would like to buy and how many
    inquirer.prompt([
      {
        name: "id",
    	  type: "input",
    	  message: "Which item ID would you like to purchase?"
      },{
        name: "quantity",
    	  type: "input",
    	  message: "How many would you like to purchase?"
      }
    ]).then(function(answer) {

        var index = answer.id - 1;

        if (res[index].stock_quantity < answer.quantity) {
          console.log("There is not enough of the product in stock.");
          purchaseProduct();
        }
        else {

  		    dbConnection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE ?", [answer.quantity, { item_id: answer.id }],
          function() {
          	//query to get 
          	dbConnection.query("SELECT price FROM products WHERE ?", [{item_id: answer.id}], 
          	function(err, res) {
          		for (var i = 0; i < res.length; i++){
          		  //logs price of purchase
          			console.log("Purchase accepted. " + "Your total is: " + "$" + (answer.quantity*res[i].price));
          		}
          	}); 
            productSearch();
          });
        }
 	    });
	 });
};
      