SELECT SUM(quantity * price) as product_total
FROM carts
INNER JOIN products ON carts."productId" = products.id
WHERE carts."userId" = 1
GROUP BY products.id;