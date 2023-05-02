const express = require('express');
const controllers = require('./controllers');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionarr
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', controllers.findAll);

app.get('/products/:id', controllers.findById);

app.post('/products', controllers.productRegister);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;