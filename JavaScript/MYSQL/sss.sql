create database sales;
use sales;
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(100)
);

INSERT INTO customers (customer_name, city) VALUES
('John Doe', 'New York'),
('Alice Smith', 'Los Angeles'),
('Bob Johnson', 'Chicago'),
('Emily Brown', 'Houston');


CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO orders (customer_id, order_date, total_amount) VALUES
(1, '2024-04-01', 100.50),
(2, '2024-04-02', 200.75),
(3, '2024-04-03', 150.20),
(4, '2024-04-04', 300.00),
(1, '2024-04-05', 75.80);

select * from customers;
select * from orders;

SELECT SUM(total_amount) AS total FROM orders;
SELECT AVG(total_amount) AS average FROM orders;
SELECT COUNT(*) AS count FROM orders;
SELECT MIN(total_amount) AS lowest FROM orders;
SELECT MAX(total_amount) AS highest FROM orders;


SELECT customer_id, COUNT(*) AS num
FROM orders
GROUP BY customer_id;


SELECT customer_id, AVG(total_amount) AS avg_order
FROM orders
GROUP BY customer_id
HAVING AVG(total_amount) > 150;


SELECT customers.customer_id, customers.customer_name, orders.order_date, orders.total_amount
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;


SELECT customers.customer_id, customers.customer_name, orders.order_date, orders.total_amount
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;


SELECT customers.customer_id, customers.customer_name, orders.order_date, orders.total_amount
FROM customers
RIGHT JOIN orders ON customers.customer_id = orders.customer_id;


SELECT customers.customer_id, customers.customer_name, orders.order_date, orders.total_amount
FROM customers
FULL JOIN orders ON customers.customer_id = orders.customer_id;


