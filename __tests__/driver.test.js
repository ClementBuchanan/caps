
const driver = require('../driver/driver.js');
const expect = driver.expect;

let logSpy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  logSpy.mockRestore();
});

describe('getsPackage', () => {

  it('checks pick up console.logs', () => {
    driver.getsPackage();
    setTimeout(() => {
      expect(driver).toHaveBeenCalled()
    }, 2000)
  });

  it('checks enRoute console.log', () => {
    driver.enRoute();
    setTimeout(() => {
      expect(driver).toHaveBeenCalled()
    }, 4000)
  });

});