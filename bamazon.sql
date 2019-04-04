drop database if exists bamazon;
create database bamazon; 
use bamazon;
create table products(
item_id int auto_increment not null,
product_name varchar(35) not null, 
department_name varchar(35) not null,
price decimal(4,2) not null,
stock_quantity int(150) not null,
primary key(item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Uncharted 4", "Video Games", 29.95, 150),
  ("Super Smash Bros. Ultimate", "Video Games", 59.99, 200),
  ("Crate of Spam", "Food and Drink", 24.50, 50),
  ("Sunglasses", "Apparel", 75.00, 5),
  ("Worn Denim Jeans", "Apparel", 54.25, 35),
  ("Survival Towel", "Necessities", 42.42, 42),
  ("Spider-Man: Into the Spider-Verse", "Films", 29.99, 55),
  ("Lord of the Rings Trilogy", "Films", 45.00, 25),
  ("Monopoly", "Board Games", 30.50, 35),
  ("Yahtzee", "Board Games", 19.95, 23);
  select * from products 