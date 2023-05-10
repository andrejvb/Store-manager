const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const models = require('../../../src/models');
const connection = require('../../../src/connection');
const { mockAllSales, mockByIdSale } = require('../mock/model.mock')

describe('Model Tests', () => {
  describe('Sucess case', () => {
    beforeEach(() => sinon.restore());

    it('Find all sales', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([mockAllSales]);
      // Act
      const result = await models.findAllSales();
      // Assert
      expect(result).to.be.an('array');
      expect(result[0]).to.contain.keys(['date', 'productId', 'quantity']);
      expect(result).to.have.length(3);
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([mockByIdSale]);
      // Act
      const result = await models.findSaleById(2);
      // Assert
      expect(result).to.be.an('array');
      expect(result[0]).to.contain.keys(['date', 'productId', 'quantity']);
      expect(result[0]).to.have.property('productId').to.equal(3);
      expect(result[0]).to.have.property('quantity').to.equal(15);
      expect(result).to.be.equal(mockByIdSale);
    });
  });
});  