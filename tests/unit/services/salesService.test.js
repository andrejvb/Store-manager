const { expect } = require('chai');
const sinon = require('sinon');

const services = require('../../../src/services');
const models = require('../../../src/models');
const { mockAllSales, mockByIdSale } = require('../mock/model.mock');

describe('Services Tests', () => {
  describe('Sucess case', () => {
    beforeEach(() => sinon.restore());

    it('Find all sales', async () => {
      // Arrange
      sinon.stub(models, 'findAllSales').resolves(mockAllSales);
      // Act
      const result = await services.findAllSales();
      // Assert
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['statusCode', 'message']);
      expect(result.message).to.have.length(3);
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(models, 'findSaleById').resolves(mockByIdSale);
      // Act
      const result = await services.findSaleById(2);
      // Assert
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['statusCode', 'message']);
      expect(result.statusCode).to.be.equal(200);
      expect(result.message).to.deep.equal(mockByIdSale);
    });
    describe('Fail Case', () => {
      beforeEach(() => sinon.restore());

      it('Find by id', async () => {
        // Arrange
        sinon.stub(models, 'findSaleById').resolves([]);
        // Act
        const result = await services.findSaleById(20);
        // Assert
        expect(result).to.be.an('object');
        expect(result).to.contain.keys(['statusCode', 'message']);
        expect(result.statusCode).to.be.equal(404);
        expect(result.message).to.deep.equal('Sale not found');
      });
    });
  });
});
