const { expect } = require('chai');
const sinon = require('sinon');

const models = require('../../../src/models');
const connection = require('../../../src/connection');
const { mockAllProducts, mockByIdProduct } = require('../mock/model.mock');

describe('Model Tests', () => {
  describe('Sucess case', () => {
    beforeEach(() => sinon.restore());

    it('Find all products', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([mockAllProducts]);
      // Act
      const result = await models.findAll();
      // Assert
      expect(result).to.be.an('array');      
      expect(result[0]).to.contain.keys(['id', 'name']);      
      expect(result).to.have.length(3);      
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([mockByIdProduct]);
      // Act
      const result = await models.findById(3);
      // Assert
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['id', 'name']);
      expect(result).to.be.equal(mockByIdProduct[0]);
    });
  });
});