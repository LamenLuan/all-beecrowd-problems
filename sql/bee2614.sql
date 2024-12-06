SELECT c.name, r.rentals_date
FROM rentals r
INNER JOIN customers c ON c.id = r.id_customers
WHERE r.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'