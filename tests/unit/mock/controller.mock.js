const mockSalesService = {
  statusCode: 200,
  message: [
    {
      saleId: 1,
      date: '2023 - 05 - 08T14: 21: 10.000Z',
      productId: 1,
      quantity: 5
    },
    {
      saleId: 1,
      date: '2023 - 05 - 08T14: 21: 10.000Z',
      productId: 2,
      quantity: 10
    },
    {
      saleId: 2,
      date: '2023 - 05 - 08T14: 21: 10.000Z',
      productId: 3,
      quantity: 2
    }
  ]
};

module.exports = { mockSalesService }