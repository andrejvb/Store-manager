const connection = require('../connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  // console.log('result modelALL', result);
  return result;
};

const findById = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = (?);', [id]);
  // console.log('result modelID', result);
  return result;
};

const productRegister = async (product) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [product]);
  console.log('insert Id Model', insertId);
  return { id: insertId, name: product };
};

const deleteProduct = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?);', [id],
  );
  if (result === undefined) return false;
  await connection
    .execute('DELETE FROM StoreManager.products WHERE id = (?);', [id]);
};

module.exports = { findAll, findById, productRegister, deleteProduct };