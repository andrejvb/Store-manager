Store Manager - Controle de Produtos e Vendas 🏪💼💰

Descrição do Projeto 📝
O Store Manager é uma aplicação web desenvolvida com o objetivo de fornecer uma solução prática e eficiente para o controle de produtos e vendas em uma loja. A aplicação foi desenvolvida como parte de um projeto de estudo, utilizando as tecnologias Node.js, Express e MySQL.

Funcionalidades 🚀
Listagem de produtos 📋: Permite visualizar todos os produtos disponíveis na loja e obter informações detalhadas de um produto específico através de seu ID.

Cadastro de produtos ➕: Possibilita adicionar novos produtos ao sistema através de um endpoint dedicado.

Validações de produtos ✅: Implementa validações para garantir que as operações com produtos aconteçam apenas com campos válidos e de acordo com as regras de negócio.

Cadastro e validação de vendas 🛒: Cria endpoints para cadastrar e validar vendas, permitindo a adição de múltiplos produtos em uma única requisição.

Listagem de vendas 📊: Oferece endpoints para listar todas as vendas e obter informações detalhadas de uma venda específica.

Atualização de produtos 🔄: Permite a atualização dos dados de um produto existente no sistema através de um endpoint específico.

Exclusão de produtos ❌: Disponibiliza um endpoint para permitir a exclusão de produtos existentes.

Requisitos Bônus 🌟
Além das funcionalidades básicas, o projeto também contempla requisitos bônus:

Deleção de vendas ❌: Foram criados endpoints para permitir a exclusão de vendas existentes.

Atualização de vendas 🔄: Implementa endpoints para atualizar informações das vendas existentes.

Busca por produtos 🔍: Cria um endpoint que permite a busca de produtos pelo nome.

Tecnologias Utilizadas 🛠️
Node.js
Express
MySQL
JavaScript

Como Executar o Projeto ▶️

Faça o clone do repositório em sua máquina:
git clone git@github.com:andrejvb/Store-manager.git

Instale as dependências do projeto:
cd Store-manager

npm install

Configure o banco de dados MySQL com as credenciais apropriadas (host, usuário, senha) no arquivo config.js.

Execute as migrações para criar as tabelas necessárias:
npm run db:migrate

Inicie o servidor:
npm start

Acesse a aplicação através do endereço:
http://localhost:3000

Como Executar os Testes 🧪

Os testes foram implementados utilizando a biblioteca Mocha e Chai. Para executá-los, basta rodar o seguinte comando:
npm run test:mocha

Contribuindo 🤝
Se você deseja contribuir com o projeto, fique à vontade para abrir issues e pull requests. Sua colaboração é muito bem-vinda!

Licença 📜
Este projeto está licenciado sob a MIT License. Sinta-se livre para utilizar, modificar e distribuir o código conforme os termos da licença.

Agradeço por visitar este projeto! Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

Happy coding! 🚀🔥
