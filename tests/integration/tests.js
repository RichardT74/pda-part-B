const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

//test 1
  it('should have the number buttons update the display of the running total', function(){
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })


//test 2

it('should chain multiple operations together', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number5')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('50')
 });

//test 3
 it('should handle negative output', function() {
   running_total = element(by.css('#running_total'))
   element(by.css('#number5')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-4')
 });

});
