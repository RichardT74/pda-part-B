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

//test 1 running total
  it('should have the number buttons update the display of the running total', function(){
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

// test 2 arithmical operations




//test 3 multiple operations

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

//test 4.1 range of numbers
 it('should handle negative output', function() {
   running_total = element(by.css('#running_total'))
   element(by.css('#number5')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-4')
 });

 //test 4.2 range of numbers large output
 it('should handle negative output', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8871120')
})

//test 5
it('should return "You can\'t divide by zero" when the user tries to divide by zero', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('You can\'t divide by zero')
  })
});
