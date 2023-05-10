const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');
const { mockAllSales, mockByIdSale } = require('../mock/model.mock');

describe('Controller Test', () => {
  describe('Sucess Case', () => {
    beforeEach(() => sinon.restore());

    it('Find all Sales', async () => {
      // Arrange
      sinon.stub(services, 'findAllSales').resolves({ statusCode: 200, message: mockAllSales });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act
      const result = await controllers.findAllSales(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      // expect(res.json).to.have.been.calledWith({ statusCode: 200, message: mockAllSales });
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(services, 'findSaleById').resolves({ statusCode: 200, message: mockByIdSale[0] });
      const req = { params: { id: 2 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act
      const result = await controllers.findSaleById(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockByIdSale[0]);
      describe('Fail Case', () => {
        it('Find by id', async () => {
          // Arrange
          sinon.stub(services, 'findSaleById').resolves({ statusCode: 404, message: 'Product not found' });
          const req = { params: { id: 30 } };
          const res = {};
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          // Act
          const result = await controllers.findSaleById(req, res);
          // Assert
          expect(res.status).to.have.been.calledWith(404);
          expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
        })
      })
    })
  });
});