const { findAll, findById, productRegister } = require('./products.model');

const { insertSale, findAllSales, findSaleById } = require('./sales.model');

module.exports = {
  findAll,
  findById,
  productRegister,
  insertSale,
  findAllSales,
  findSaleById,
};