const { findAll, findById, productRegister, deleteProduct } = require('./products.model');

const { insertSale, findAllSales, findSaleById } = require('./sales.model');

module.exports = {
  findAll,
  findById,
  productRegister,
  insertSale,
  findAllSales,
  findSaleById,
  deleteProduct,
};