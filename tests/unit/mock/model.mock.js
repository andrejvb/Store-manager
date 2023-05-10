const mockAllProducts = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const mockByIdProduct = [{ id: 3, name: 'Escudo do Capitão América' }];

const mockAllSales = [
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
];

const mockByIdSale = [
  {
    date: "2023-05-09T19:01:52.000Z",
    productId: 3,
    quantity: 15
  }
]

module.exports = { mockAllProducts, mockByIdProduct, mockAllSales, mockByIdSale };
