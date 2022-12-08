SELECT products.id, products.name
FROM products
INNER JOIN 
(
	SELECT id, name
	FROM categories
	WHERE categories.name LIKE 'super%'
) q1
ON products.id_categories = q1.id;