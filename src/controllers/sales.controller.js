const services = require('../services');

const insertSale = async (req, res) => {
  const { body } = req;
  const result = await services.insertSale(body);
  return res.status(201).json(result.message);
};

module.exports = { insertSale };