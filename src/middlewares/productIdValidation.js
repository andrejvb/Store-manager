const connection = require('../connection');

const productIdValidation = async (req, res, next) => {
  const { body } = req;

  const existsId = body.every((sale) => 'productId' in sale);

  if (!existsId) {
    return res.status(400).json({ message: '"productId" is required' });
  } 

  const productsIds = body.map((product) => product.productId);
  const queryIds = await Promise.all(productsIds.map(async (id) => connection.execute(
    'SELECT EXISTS(SELECT * FROM StoreManager.products WHERE id = (?)) AS id',
    [id],
  )));
  const binaryRows = queryIds.flatMap(([rows]) => [...rows]);
  const ids = binaryRows.map((row) => row.id);

  if (ids.includes(0)) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = productIdValidation;