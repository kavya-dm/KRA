-- E COMMERCE ORDER MANAGEMENT

-- This file is step by step
-- Run queries in order from top to bottom
-- Each step explains what is happening in simple words

-- STEP 1 DROP OLD TABLES
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;

-- STEP 2 CREATE CUSTOMERS TABLE
-- Stores customer basic information
CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
created_date DATE NOT NULL,
loyalty_points INT DEFAULT 0
);

-- STEP 3 CREATE PRODUCTS TABLE
-- Stores product details
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
price NUMERIC(10,2) NOT NULL,
category TEXT NOT NULL
);

-- STEP 4 CREATE ORDERS TABLE
-- One order belongs to one customer
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
customer_id INT REFERENCES customers(id),
order_date DATE NOT NULL,
total_amount NUMERIC(12,2) DEFAULT 0
);

-- STEP 5 CREATE ORDER ITEMS TABLE
-- One order can have many items
CREATE TABLE order_items (
id SERIAL PRIMARY KEY,
order_id INT REFERENCES orders(id),
product_id INT REFERENCES products(id),
quantity INT NOT NULL,
unit_price NUMERIC(10,2) NOT NULL
);


-- * Inserts multiple rows into the `customers` table in one query
-- * `generate_series(1,100)` creates 100 rows automatically
-- * `'Customer ' || g` and `'user' || g || '@shop.com'` generate unique names and emails
-- * `g % 30` spreads created dates across the last 30 days
-- * Faster and cleaner than writing many individual INSERT statements


-- STEP 6 INSERT CUSTOMERS
INSERT INTO customers (name, email, created_date)
SELECT
  'Customer ' || g,
  'user' || g || '@shop.com',
  CURRENT_DATE - (g % 30)
FROM generate_series(1,100) g;


-- STEP 7 INSERT PRODUCTS
INSERT INTO products (name, price, category) VALUES
('Laptop',800,'Electronics'),
('Mouse',20,'Electronics'),
('Keyboard',40,'Electronics'),
('Phone',600,'Electronics'),
('Tablet',400,'Electronics'),
('Monitor',300,'Electronics'),
('Headphones',150,'Electronics'),
('Charger',25,'Electronics'),
('Shoes',120,'Fashion'),
('T-Shirt',25,'Fashion'),
('Jeans',60,'Fashion'),
('Jacket',180,'Fashion'),
('Watch',200,'Accessories'),
('Bag',90,'Accessories'),
('Wallet',45,'Accessories'),
('Belt',35,'Accessories'),
('Sunglasses',110,'Accessories'),
('Cap',20,'Accessories'),
('Notebook',15,'Stationery'),
('Pen',5,'Stationery');


-- STEP 8 INSERT ORDERS
INSERT INTO orders (customer_id, order_date)
SELECT
  (g % 100) + 1,
  CURRENT_DATE - (g % 60)
FROM generate_series(1,150) g;
;

-- STEP 9 INSERT ORDER ITEMS
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
SELECT
  (g % 150) + 1,
  (g % 20) + 1,
  (g % 5) + 1,
  (SELECT price FROM products WHERE id = (g % 20) + 1)
FROM generate_series(1,300) g;


-- STEP 10 INNER JOIN
-- Shows only matching customers and orders
SELECT o.id, c.name, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- STEP 11 LEFT JOIN
-- Shows all customers even without orders
SELECT c.name, o.id AS order_id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id;

-- STEP 12 RIGHT JOIN
-- Shows all products even if never ordered
SELECT p.name, oi.order_id
FROM order_items oi
RIGHT JOIN products p ON oi.product_id = p.id;

-- STEP 13 FULL OUTER JOIN
-- Shows all customers and all products
SELECT c.name AS customer, p.name AS product
FROM customers c
FULL OUTER JOIN products p ON c.id = p.id;

-- STEP 14 CROSS JOIN
-- Creates combinations of customers and products
SELECT c.name, p.name
FROM customers c
CROSS JOIN products p
LIMIT 10;

-- STEP 15 SELF JOIN
-- Compares orders of the same customer
SELECT a.customer_id, a.id AS order_one, b.id AS order_two
FROM orders a
JOIN orders b
ON a.customer_id = b.customer_id AND a.id <> b.id;

-- STEP 16 CREATE INDEX ON ORDERS CUSTOMER
CREATE INDEX idx_orders_customer ON orders(customer_id);

-- STEP 17 CREATE INDEX ON PRODUCT CATEGORY
CREATE INDEX idx_products_category ON products(category);

-- STEP 18 CREATE UNIQUE INDEX ON EMAIL
CREATE UNIQUE INDEX idx_customer_email ON customers(email);

-- STEP 19 CREATE PARTIAL INDEX FOR HIGH VALUE ORDERS
CREATE INDEX idx_high_value_orders
ON orders(total_amount)
WHERE total_amount > 1000;

-- STEP 20 CREATE BRIN INDEX FOR ORDER DATE
CREATE INDEX idx_order_date_range
ON orders USING BRIN(order_date);

-- STEP 21 CHECK PERFORMANCE USING EXPLAIN ANALYZE
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 5;

-- STEP 22 TRANSACTION ATOMICITY EXAMPLE
BEGIN;
UPDATE orders SET total_amount = total_amount - 100 WHERE id = 1;
UPDATE orders SET total_amount = total_amount + 100 WHERE id = 2;
ROLLBACK;

-- STEP 23 TRANSACTION WITH COMMIT
BEGIN;
UPDATE orders SET total_amount = total_amount + 50 WHERE id = 1;
COMMIT;

-- STEP 24 SAVEPOINT EXAMPLE
BEGIN;
INSERT INTO orders (customer_id, order_date) VALUES (1, CURRENT_DATE);
SAVEPOINT before_items;
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES (1, 1, 2, 800);
ROLLBACK TO SAVEPOINT before_items; 
COMMIT;
-- Cancels only the order items insert, the order itself remains.

-- STEP 25 TRIGGER FUNCTION TO UPDATE ORDER TOTAL
CREATE OR REPLACE FUNCTION update_order_total()
RETURNS TRIGGER AS $$
BEGIN
UPDATE orders
SET total_amount = (
SELECT COALESCE(SUM(quantity * unit_price),0)
FROM order_items WHERE order_id = NEW.order_id
)
WHERE id = NEW.order_id;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- STEP 26 TRIGGER FOR ORDER ITEMSs
CREATE TRIGGER trg_order_total
AFTER INSERT OR UPDATE ON order_items
FOR EACH ROW EXECUTE FUNCTION update_order_total();

-- STEP 27 CREATE AUDIT TABLE
CREATE TABLE order_audit (
id SERIAL PRIMARY KEY,
order_id INT,
old_total NUMERIC,
new_total NUMERIC,
changed_at TIMESTAMP DEFAULT now()
);

-- STEP 28 AUDIT TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION audit_order_changes()
RETURNS TRIGGER AS $$
BEGIN
INSERT INTO order_audit(order_id, old_total, new_total)
VALUES (OLD.id, OLD.total_amount, NEW.total_amount);
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- STEP 29 AUDIT TRIGGER
CREATE TRIGGER trg_order_audit
AFTER UPDATE OF total_amount ON orders
FOR EACH ROW EXECUTE FUNCTION audit_order_changes();

-- STEP 30 LOYALTY POINTS TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION add_loyalty_points()
RETURNS TRIGGER AS $$
BEGIN
IF NEW.total_amount > 500 THEN
UPDATE customers
SET loyalty_points = loyalty_points + 10
WHERE id = NEW.customer_id;
END IF;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- STEP 31 LOYALTY TRIGGER
CREATE TRIGGER trg_loyalty
AFTER UPDATE OF total_amount ON orders
FOR EACH ROW EXECUTE FUNCTION add_loyalty_points();

-- STEP 32 FINAL VERIFICATION QUERY
SELECT c.name,
COUNT(o.id) AS total_orders,
SUM(o.total_amount) AS total_spent,
c.loyalty_points
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name, c.loyalty_points
ORDER BY total_spent DESC;


select * from orders;
select * from order_items;
select * from products;
select * from customers;
select * from order_audit;


-- Check that triggers exist
SELECT trigger_name, event_manipulation, event_object_table
FROM information_schema.triggers
WHERE event_object_table IN ('order_items','orders');

-- Insert a new order and get its id
INSERT INTO orders (customer_id, order_date)
VALUES (1, CURRENT_DATE)
RETURNING id;

--  Insert order items using the real id
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES (21, 1, 2, 800);

-- Check if order total trigger worked
SELECT id, total_amount
FROM orders
WHERE id = 21;

-- Check audit trigger
-- Update order total
UPDATE orders
SET total_amount = total_amount + 100
WHERE id = 21;

-- Check audit table
SELECT * FROM order_audit
ORDER BY changed_at DESC;

-- Check loyalty points trigger
-- Check points before
SELECT loyalty_points FROM customers WHERE id = 1;

-- Update total above 500
UPDATE orders
SET total_amount = 600
WHERE id = 21;

-- Check points after
SELECT loyalty_points FROM customers ;


-- ACID -(DDL/DML) - COMMIT, ROLLBACK, SAVEPOINT, ROLLBACK TO SAVEPOINT

-- BEGIN
-- Starts a transaction. Changes are temporary until saved.

-- COMMIT
-- Saves all changes permanently to the database.

-- ROLLBACK
-- Cancels all changes made after BEGIN.

-- SAVEPOINT
-- Creates a checkpoint/Mark inside a transaction.

-- ROLLBACK TO SAVEPOINT
-- Cancels changes only up to that checkpoint, not the entire transaction.

-- In Plsql by default - Auto COMMIT - to perform TCL(Transactions) Use - START TRANSACTION; / BEGIN;
-- Begins a transaction block, All changes stay temporary, Changes are saved only after COMMIT, Changes are canceled with ROLLBACK


-- Indexes make data search faster in a table, like an index in a book.

-- Transactions group multiple SQL operations so they succeed together or fail together. They are auto executed based on the events that we mention.

-- Triggers automatically run a function when data is inserted, updated, or deleted.

-- Drop(Cascade)