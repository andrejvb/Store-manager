const express = require('express');
const controllers = require('./controllers');

const nameValidation = require('./middlewares/nameValidation');
const productIdValidation = require('./middlewares/productIdValidation');
const quantityValidation = require('./middlewares/quantityValidation');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionarr
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', controllers.findAll);

app.get('/products/:id', controllers.findById);

app.post('/products', nameValidation, controllers.productRegister);

app.post('/sales', productIdValidation, quantityValidation, controllers.insertSale);

app.get('/sales', controllers.findAllSales);

app.get('/sales/:id', controllers.findSaleById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;