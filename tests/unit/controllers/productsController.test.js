const { expect } = require('chai');
const sinon = require('sinon');

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');
const { mockAllProducts, mockByIdProduct } = require('../mock/model.mock');

describe('Controller Test', () => {
  describe('Sucess Case', () => {
    beforeEach(() => sinon.restore());

    it('Find all products', async () => {
      // Arrange
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns;
      sinon.stub(services, 'findAll').resolves({ statusCode: 200, message: mockAllProducts });
      // Act
      const result = await controllers.findAll(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockAllProducts);
    });
  });
});
