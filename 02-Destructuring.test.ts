
import { describe, it, expect } from 'vitest';

describe('Destructuring Assignment tests', () => {
  
  it('should destructure array elements into variables', () => {
    const array = [1, 2, 3, 4];
    // Use destructuring to assign first and second elements to variables
    const [first, second] = array;
    expect(first).toBe(1); // Should be 1
    expect(second).toBe(2); // Should be 2
  });

  it('should use rest pattern to capture remaining elements', () => {
    const array = ['a', 'b', 'c', 'd'];
    // Use destructuring to capture remaining elements into rest
    const [, ...rest] = array;
    expect(rest).toEqual(['b', 'c', 'd']);
  });

  it('should destructure object properties into variables', () => {
    const object = { name: 'Alice', age: 30 };
    // Use destructuring to assign name and age to variables
    const {name, age} = object
    expect(name).toBe('Alice'); // Should be 'Alice'
    expect(age).toBe(30); // Should be 30
  });

  it('should assign default value to missing properties', () => {
    const object = { name: 'Alice', age: undefined };
    // Use destructuring to assign default value to age
    const {age = 25} = object
    expect(age).toBe(25); // Should be 25
  });

  it('should use rest pattern to capture remaining object properties', () => {
    const object = { name: 'Alice', age: 30, country: 'Wonderland' };
    // Use destructuring to capture remaining properties into rest
    const {name, ...rest} = object
    expect(rest).toEqual({ age: 30, country: 'Wonderland' }); 
  });

});

