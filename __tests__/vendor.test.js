const vendor = require('../vendor/vendor.js');


let logSpy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  logSpy.mockRestore();
});

let fake = {
  storeName: 'store name',
  orderId: 'order',
  customerName: 'name',
  customerAddress: 'address',
  customerZipCode: 'zipcode'
}

describe('should test vendor.js console log', () => {

  it('checks new order console.logs', () => {
    vendor.newSale(fake);
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 6000)
  });

  it('checks delivered console.logs', () => {
    vendor.deliveryMade(fake);
    expect(logSpy).toHaveBeenCalled();
  });

});
