const { findAll, findById, productRegister } = require('./products.controller');

const { insertSale } = require('./sales.controller');

module.exports = { findAll, findById, productRegister, insertSale };
