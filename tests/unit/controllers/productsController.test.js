const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');
const { mockAllProducts, mockByIdProduct } = require('../mock/model.mock');


describe('Controller Test', () => {
  describe('Sucess Case', () => {
    beforeEach(() => sinon.restore());

    it('Find all products', async () => {
      // Arrange
      sinon.stub(services, 'findAll').resolves({ statusCode: 200, message: mockAllProducts });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act
      const result = await controllers.findAll(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ statusCode: 200, message: mockAllProducts });
    });
    it('Find by id', async () => {
      // Arrange
      sinon.stub(services, 'findById').resolves({ statusCode: 200, message: mockByIdProduct[0] });
      const req = { params: { id: 3} };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Act
      const result = await controllers.findById(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockByIdProduct[0]);
    describe('Fail Case', () => {
      it('Find by id', async () => {
        // Arrange
        sinon.stub(services, 'findById').resolves({ statusCode: 404, message: 'Product not found' });
        const req = { params: { id: 30 } };
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        // Act
        const result = await controllers.findById(req, res);
        // Assert
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
      })
    })  
    })
  });
});
