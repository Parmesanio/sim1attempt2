update products
set product_name = $2, product_url = $3, product_price = $4
where id = $1
returning *;