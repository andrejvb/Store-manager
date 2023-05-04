const { findAll, findById, productRegister } = require('./products.service');

const { insertSale } = require('./sales.service');

module.exports = { findAll, findById, productRegister, insertSale };