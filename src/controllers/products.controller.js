const services = require('../services');

const findAll = async (_req, res) => {
  const result = await services.findAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await services.findById(id);
  if (result.statusCode === 404) {
    return res.status(result.statusCode).json({ message: result.message });
  }
  return res.status(result.statusCode).json(result.message);
};

const productRegister = async (req, res) => {
  const product = req.body.name;
  const result = await services.productRegister(product);
  return res.status(result.statusCode).json(result.message);
};

module.exports = { findAll, findById, productRegister };
