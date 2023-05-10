const connection = require('../connection');

const insertSale = async (body) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW());');
  await Promise.all(body.map(({ productId, quantity }) => connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [insertId, productId, quantity],
  )));
  return { id: insertId, itemsSold: body };
};

const findAllSales = async () => {
  const [allSales] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity
        FROM StoreManager.sales_products AS table1
        LEFT JOIN StoreManager.sales AS table2 ON table1.sale_id = table2.id;`, 
  );
  console.log('allsales MODEL', allSales);
  return allSales;
}; 

const findSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id as productId, quantity
        FROM StoreManager.sales_products AS table1
        LEFT JOIN StoreManager.sales AS table2 ON table1.sale_id = table2.id WHERE sale_id = (?);`,
    [id],
  );
  return sale;
};

module.exports = { insertSale, findAllSales, findSaleById };
