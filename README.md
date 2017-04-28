# Bamazon

Bamazon is an Amazon-like storefront that allows the user to choose a product as long as it is in stock an purchase it.

Once the application has started, the user will see a table of the items listed, the stock amount, and price. The user will be prompted to choose an item based off the ID of the product. Then, the user will be asked to specify the amount they'd like to purchase. If the stock is sufficient, it will say the purchase is succesful and say the price that they paid. If there is not enough product in stock, the user will be told that there is not enough product in stock. 

## Getting Started

Use node in order to start the program. Type in 'node bamazonCustomer' and the application will start.

### Prerequisites

The program requires node, mySQL, and Inquirer.

```
Examples:

var mysql = require("mysql");
var inquirer = require("inquirer");
```

### Installing

In order to run the application, the user must have installed mySQL and Inquirer node modules. To install, the user will use npm. To do so, enter the following in the terminal:

```
Examples:

npm install myql
npm install inquirer
```

## Deployment

We would deploy on node at this moment, but it could be deployed through heroku or firebase.

## Built With

* Node
* NPM packages
* mySQL
* JavaScript