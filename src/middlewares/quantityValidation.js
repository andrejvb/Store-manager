const quantityValidation = (req, res, next) => {
  const { body } = req;

  const existsQuant = body.every((sale) => 'quantity' in sale);
  if (!existsQuant) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const overZero = body.every((sale) => sale.quantity > 0);
  if (!overZero) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = quantityValidation;