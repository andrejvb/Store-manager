const { findAll, findById, productRegister } = require('./products.model');

const { insertSale } = require('./sales.model');

module.exports = { findAll, findById, productRegister, insertSale };