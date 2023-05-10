const model = require('../models');

const findAll = async () => {
  const result = await model.findAll();
  return result;
};

const findById = async (id) => {
  const result = await model.findById(id);
  if (!result) {
    return { statusCode: 404, message: 'Product not found' };
  }
  return { statusCode: 200, message: result };
};

const productRegister = async (product) => {
  const result = await model.productRegister(product);
  console.log('result SERVICE', result);
  return { statusCode: 201, message: result };
};

const deleteProduct = async (id) => {
  const result = await model.deleteProduct(id);
  if (result === false) return { statusCode: 404, message: 'Product not found' };
  return { statusCode: 204, message: {} };
};

module.exports = { findAll, findById, productRegister, deleteProduct };