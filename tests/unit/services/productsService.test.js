const { expect } = require('chai');
const sinon = require('sinon');

const services = require('../../../src/services');
const models = require('../../../src/models');
const connection = require('../../../src/connection');
const { mockAllProducts, mockByIdProduct } = require('../mock/model.mock');

describe('Service Tests', () => {
  describe('Sucess case', () => {
    beforeEach(() => sinon.restore());

    it('Find all products', async () => {
      // Arrange
      sinon.stub(models, 'findAll').resolves(mockAllProducts);
      // Act
      const result = await models.findAll();
      // Assert
      expect(result).to.be.an('array');
      expect(result[0]).to.contain.keys(['id', 'name']);
      expect(result).to.have.length(3);
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(models, 'findById').resolves(mockByIdProduct[0]);
      // Act
      const result = await services.findById(3);
      // Assert
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['statusCode', 'message']);
      expect(result.statusCode).to.be.equal(200);
      expect(result.message).to.deep.equal(mockByIdProduct[0])
    });
  describe('Fail Case', () => {
    beforeEach(() => sinon.restore());

    it('Find by id', async () => {
        // Arrange
      sinon.stub(models, 'findById').resolves(undefined);
        // Act
      const result = await services.findById(30);
        // Assert
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['statusCode', 'message']);
      expect(result.statusCode).to.be.equal(404);
      expect(result.message).to.deep.equal('Product not found');
      });
    });  
  });
});
