const connection = require('../connection');

const insertSale = async (body) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW());');
  await Promise.all(body.map(({ productId, quantity }) => connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [insertId, productId, quantity],
  )));
  console.log('sales MODEL', body);
  return { id: insertId, itemsSold: body };
};

module.exports = { insertSale };
