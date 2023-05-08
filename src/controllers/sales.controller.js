const services = require('../services');

const insertSale = async (req, res) => {
  const { body } = req;
  const result = await services.insertSale(body);
  return res.status(201).json(result.message);
};

const findAllSales = async (req, res) => {
  const allSales = await services.findAllSales();
  return res.status(200).json(allSales.message);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await services.findSaleById(id);
  if (sale.statusCode === 404) return res.status(404).json({ message: sale.message });
  return res.status(200).json(sale.message);
};

module.exports = { insertSale, findAllSales, findSaleById };