create database Bamazon;

#create new table from .csv or add a manually created table
CREATE TABLE Bamazon.products (
	item_id INTEGER(15) AUTO_INCREMENT NOT NULL,
	product_name varchar(50) not null,
    department_name varchar(50) not null,
    price decimal(10, 2) null,
    stock_quantity INTEGER(10) null, 
    PRIMARY KEY (item_id)
); 

#Customer_View (minimum requirement)

#query to see all products
SELECT * FROM Bamazon.products;

#Manager_View 

#query to view all products with loq quantity
SELECT * FROM Bamazon.products where stock_quantity < 20;

#query to update  based on id
UPDATE Bamazon.products SET stock_quantity = '200' WHERE item_id = '6';

#add new product
INSERT INTO Bamazon.products( item_id , product_name , department_name, price , stock_quantity) 
VALUES (' ', ' ', ' ' , ' ', ' ');

#drop database Bamazon;
