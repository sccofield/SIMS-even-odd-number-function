import { assert } from 'chai';

describe('Testing Even Odd number function', () => {
  it('should return an object', () => {
    const result = evenAndOdd([2, 3, 5, 34, 54, 765, 34, 23, 23, 54]);
    assert.typeOf(result, 'object');
  });
  it('should have a property even', () => {
    const result = evenAndOdd([2, 3, 4, 5, 6, 6, 7]);
    assert.hasAnyKeys(result, ['even']);
  });
  it('should have a property odd', () => {
    const result = evenAndOdd([2, 3, 4, 5, 6, 6, 7]);
    assert.hasAnyKeys(result, ['odd']);
  });
  it('should return an object of even and odd numbers', () => {
    const result = evenAndOdd([2, 3, 4, 5, 6, 7, 8]);
    assert.equal(result, { even: [2, 4, 6, 8], odd: [3, 5, 7] });
  });
  it('should return an object whose properties are arrays', () => {
    const result = evenAndOdd([2, 3, 4, 5, 6, 7, 8]);
    assert.isArray(result.even, 'result');
  });
  it('should return an error message when a string is passed', () => {
    const result = evenAndOdd('hello world');
    assert.equal(result, 'Please enter a valid argument');
  });
  it('should return an error message when an object is passed', () => {
    const result = evenAndOdd({ me: 'Michael' });
    assert.equal(result, 'Please enter a valid argument');
  });
  it('should return an error message when a number is passed', () => {
    const result = evenAndOdd(345);
    assert.equal(result, 'Please enter a valid argument');
  });
});

assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'iDontExist', 'baz']);
