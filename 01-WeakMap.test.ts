
import { describe, it, expect } from 'vitest';

describe('WeakMap tests', () => {
  
  //set and get a value from weakmap
  it('should set and get a value from the WeakMap', () => {
    const weakMap = new WeakMap<object, string>();
    let key = { name: 'testKey' };
    // Set the key with a value
    weakMap.set(key, 'testValue')

    expect(weakMap.get(key)).toBe('testValue'); // Should be 'testValue'
  });

  //key not present
  it('should return false for a key not present in the WeakMap', () => {
    const weakMap = new WeakMap<object, string>();
    let key = { name: 'testKey' };
    // Do not set the key
    // Initially fail the test by expecting true
    expect(weakMap.has(key)).toBe(false); // Should be false
  });

  //key exists
  it('should correctly indicate that a key exists in the WeakMap', () => {
    const weakMap = new WeakMap<object, string>();
    let key = { name: 'testKey' };
    weakMap.set(key, 'testValue');
    // Initially fail the test by expecting false
    expect(weakMap.has(key)).toBe(true); // Should be true
  });

  //delete key
  it('should delete a key-value pair', () => {
    const weakMap = new WeakMap<object, string>();
    let key = { name: 'testKey' };
    weakMap.set(key, 'testValue');
    weakMap.delete(key);
    expect(weakMap.has(key)).toBe(false); // Should be false after deletion
  });

  it('should free weak reference', ()=> {
    const weakMap = new WeakMap<object, string>();
    let key: {name: string} | null = { name: 'testKey' };
    weakMap.set(key, 'testValue');
    key = null;
    //expect(weakMap.has(key)).toBe(false);
  });
});

