const model = require('../models');

const findAll = async () => {
  const result = await model.findAll();
  return result;
};

const findById = async (id) => {
  const result = await model.findById(id);
  console.log('result: ', result);
  if (!result) {
    return { statusCode: 404, message: 'Product not found' };
  }
  return { statusCode: 200, message: result };
};

module.exports = { findAll, findById };