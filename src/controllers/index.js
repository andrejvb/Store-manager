const { findAll, findById, productRegister } = require('./products.controller');

const { insertSale, findAllSales, findSaleById } = require('./sales.controller');

module.exports = {
  findAll,
  findById,
  productRegister,
  insertSale,
  findAllSales,
  findSaleById,
};
