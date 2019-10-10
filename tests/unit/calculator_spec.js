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

  it('displays concatonated number upon multiple clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.equal(44, calculator.runningTotal);
  });

  it('should chain multiple operators together', function () {
  calculator.numberClick(5);
  calculator.operatorClick('+');
  calculator.numberClick(5);
  calculator.operatorClick('*');
  calculator.numberClick(10);
  calculator.operatorClick('=');
  assert.equal('100', calculator.runningTotal);
});

it('clear button clears displayed when clicked', function(){
  calculator.runningTotal = 10;
  calculator.operatorClick('-');
  calculator.numberClick(3);
  calculator.clearClick();
  calculator.numberClick(5);
  calculator.operatorClick('=');
  const actual = calculator.runningTotal;
  assert.equal(actual,'5');
});


});
