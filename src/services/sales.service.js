const model = require('../models');

const insertSale = async (body) => {
  const result = await model.insertSale(body);
  return { statusCode: 201, message: result };
};

module.exports = { insertSale };