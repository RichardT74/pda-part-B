var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('add 1 to 4 and get 5', function(done) {
    assert.equal(5, 1+4);
    done();
  });

  it('subtract 4 from 7 and get 3', function(done) {
    assert.equal(3, 7-4);
    done();
  });


  it('multiply 3 by 5 and get 15', function(done) {
    assert.equal(15, 3*5);
    done();
  });

  it('divide 21 by 7 and get 3', function(done) {
    assert.equal(3, 21/7);
    done();
  });



});


// calculator.numberClick()
//
// it('successfully runs when two numbers are used', () => {
//   assert.equal(operations.validateNumbers(5, 5), true);
// });
