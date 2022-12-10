SELECT categories.name, SUM(amount) as sum
FROM products
INNER JOIN categories
ON products.id_categories = categories.id
GROUP BY categories.name;