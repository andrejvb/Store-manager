const model = require('../models');

const insertSale = async (body) => {
  const result = await model.insertSale(body);
  return { statusCode: 201, message: result };
};

const findAllSales = async () => {
  const allSales = await model.findAllSales();
  return { statusCode: 200, message: allSales };
};

const findSaleById = async (id) => {
  const sale = await model.findSaleById(id);
  if (sale.length === 0) return { statusCode: 404, message: 'Sale not found' };
  return { statusCode: 200, message: sale };
};

module.exports = { insertSale, findAllSales, findSaleById };