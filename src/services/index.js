const { findAll, findById, productRegister } = require('./products.service');

const { insertSale, findAllSales, findSaleById } = require('./sales.service');

module.exports = {
  findAll,
  findById,
  productRegister,
  insertSale,
  findAllSales,
  findSaleById,
};