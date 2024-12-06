SELECT c.name, o.id
FROM orders o
INNER JOIN customers c ON c.id = o.id_customers
WHERE o.orders_date BETWEEN '01/01/2016' AND '06/30/2016'