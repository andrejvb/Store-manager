const connection = require('../connnection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  console.log('result modelALL', result);
  return result;
}

const findById = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = (?);', [id]);
  console.log('result model', result);
  return result;
}

module.exports = { findAll, findById };