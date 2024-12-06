SELECT pd.name
FROM products pd
INNER JOIN providers pv ON pv.id = pd.id_providers
WHERE 
	pd.amount BETWEEN 10 AND 20 AND
	pv.name LIKE 'P%'