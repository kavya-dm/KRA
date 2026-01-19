
Execution order:

1. **FROM / JOIN**  ->  identify and combine source tables
2. **WHERE** -> filter rows before grouping or selection
3. **GROUP BY** -> group rows for aggregation
4. **HAVING** -> filter groups after aggregation
5. **SELECT** -> choose columns and expressions
6. **ORDER BY** -> sort the result set
7. **LIMIT / OFFSET / FETCH** -> restrict and paginate the final output




-- DATABASE RESET & SETUP
DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;
\c bookstore;


-- TABLE DEFINITIONS
CREATE TABLE authors (id SERIAL PRIMARY KEY, 
                      name VARCHAR(100) NOT NULL, 
                      bio TEXT);

CREATE TABLE books (id SERIAL PRIMARY KEY, 
                    title VARCHAR(200) NOT NULL, 
                    author_id INT NOT NULL, 
                    price NUMERIC(10,2) CHECK (price > 0), 
                    publication_date DATE, CONSTRAINT 
                    fk_author FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE);

CREATE TABLE orders (id SERIAL PRIMARY KEY, 
                     book_id INT NOT NULL, 
                     customer_name VARCHAR(100) NOT NULL, 
                     order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
                     CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE);

-- INDEX
CREATE INDEX idx_books_price ON books(price);

-- CREATE (INSERT)
INSERT INTO authors (name, bio) VALUES
('Robert Martin', 'Clean Code advocate'),
('Martin Fowler', 'Refactoring expert'),
('Eric Evans', 'DDD pioneer'),
('J.K. Rowling', 'Harry Potter author'),
('George Orwell', 'Political fiction writer');

INSERT INTO books (title, author_id, price, publication_date) VALUES
('Clean Code', 1, 25.99, '2008-08-01'),
('Clean Architecture', 1, 28.99, '2017-09-20'),
('Refactoring', 2, 30.00, '1999-07-08'),
('Domain-Driven Design', 3, 35.50, '2003-08-30'),
('Harry Potter 1', 4, 20.00, '1997-06-26'),
('Harry Potter 2', 4, 22.00, '1998-07-02'),
('1984', 5, 18.99, '1949-06-08'),
('Animal Farm', 5, 15.99, '1945-08-17'),
('Clean Coder', 1, 24.00, '2011-05-23'),
('Patterns of Enterprise', 2, 40.00, '2002-11-15');

INSERT INTO orders (book_id, customer_name) VALUES
(1, 'Alice'),
(3, 'Bob'),
(5, 'Charlie'),
(7, 'David'),
(1, 'Eva');

-- READ (SELECT)
SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;
SELECT title, price FROM books WHERE price > 20;
SELECT title, price FROM books ORDER BY price DESC LIMIT 5;
SELECT DISTINCT customer_name FROM orders;
SELECT a.name, b.title FROM authors a INNER JOIN books b ON a.id = b.author_id;
SELECT b.title, COUNT(o.id) AS total_orders FROM books b LEFT JOIN orders o ON b.id = o.book_id GROUP BY b.title;
SELECT AVG(price) AS average_price FROM books;


SELECT a.name AS author_name, COUNT(b.id) AS total_books
FROM authors a
JOIN books b ON a.id = b.author_id
WHERE b.price > 20
GROUP BY a.name
HAVING COUNT(b.id) >= 2
ORDER BY total_books DESC
OFFSET 0
FETCH NEXT 5 ROWS ONLY;
-- INNER JOIN returns only the rows that have matching values in both tables based on the join condition.
-- JOIN -> retriving the values/data from multiple table symultaniusly.
-- FROM / JOIN → combine authors and books

-- WHERE → keep only books priced above 20

-- GROUP BY → group books by author

-- HAVING → keep authors with at least 2 books

-- SELECT → choose author name and count

-- ORDER BY → sort by number of books

-- OFFSET / FETCH → paginate final results

-- UPDATE
UPDATE books 
SET price = 27.99 
WHERE title = 'Clean Code';

UPDATE authors 
SET bio = 'Software craftsmanship leader' 
WHERE name = 'Robert Martin';

UPDATE books 
SET price = price + 2 
WHERE author_id = 4;

-- DELETE
DELETE FROM orders WHERE customer_name = 'Bob';
DELETE FROM books WHERE title = '1984';

-- VERIFICATION JOIN
SELECT a.name AS author, b.title AS book, o.customer_name
FROM authors a 
JOIN books b ON a.id = b.author_id 
LEFT JOIN orders o ON b.id = o.book_id;

-- CLEANUP
DROP TABLE orders;
DROP TABLE books;
DROP TABLE authors;

-- Aggregate functions summarize multiple rows into a single result, usually combined with GROUP BY and filtered using HAVING
-- SUM,	AVG, MIN, MAX, COUNT 
-- Aggregates ignore NULL values (except COUNT(*))


-- ACID
-- Atomicity -> eaither all operatins happen completely or nothing happens at all.
-- Consistency -> Data always stays correct and follows rules.
-- Isolation -> Multiple users’ operations do not affect each other.
-- Durability -> Once saved, data is never lost, even after a crash.

-- A Example: When placing an order, payment is deducted and order is created. If payment fails, the order is not saved.
-- C Example: An order cannot be created for a book that does not exist.

-- I Example: Two users buying the same book do not see each other’s unfinished transactions.

-- D Example: After an order is confirmed, it is still there even if the system crashes.

