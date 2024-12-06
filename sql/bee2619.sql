SELECT pd.name, pv.name, pd.price
FROM products pd
INNER JOIN providers pv ON pv.id = pd.id_providers
INNER JOIN categories c ON c.id = pd.id_categories
WHERE 
	pd.price > 1000 AND 
	c.name = 'Super Luxury'