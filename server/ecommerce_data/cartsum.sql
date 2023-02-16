SELECT SUM(quantity * price) 
FROM carts 
JOIN products ON carts."productId" = products.id;