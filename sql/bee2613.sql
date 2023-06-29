SELECT movies.id, name FROM
(SELECT id FROM prices WHERE value < 2) p
INNER JOIN movies ON p.id = movies.id_prices;