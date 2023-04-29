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

module.exports = { findAll, findById };