
import { describe, it, expect } from 'vitest';

describe('Date and Time tests', () => {
  
  it('should correctly represent the current time', () => {
    const now = new Date('2023-01-01T00:00:00Z');
    // This will always fail because the exact time cannot be predetermined
    // The student needs to correct the test to appropriately check the Date object
    expect(now).toEqual(new Date('2023-01-01T00:00:00Z'));
  });

  it('should create a date object with specific time since epoch', () => {
    const epochTime = new Date(0);
    // The student needs to assert the correct epoch time
    expect(epochTime.toISOString()).toBe('1970-01-01T00:00:00.000Z');
  });

  it('should parse a string into a date object', () => {
    const dateString = '2023-12-25T00:00:00.000Z';
    const date = new Date(dateString);
    // The student needs to correct the assertion for the parsed date
    expect(date.getFullYear()).toBe(2023);
  });

  it('should extract components from a date object', () => {
    const date = new Date('2023-12-25T12:30:00.000Z');
    // The student needs to correct the assertions to match the date object's components
    expect(date.getFullYear()).toBe(2023);
    expect(date.getMonth()).toBe(11); // December is month 11 because of zero-indexing
    expect(date.getDate()).toBe(26);
    expect(date.getHours()).toBe(1);
    expect(date.getMinutes()).toBe(30);
  });

  it('should format a date for a specific locale', () => {
    const date = new Date('2023-12-25T12:30:00.000Z');
    // The student should correct the locale and format options to match the expected output
    const formattedDate = date.toLocaleString('en-US', { timeZone: 'UTC' });
    expect(formattedDate).toBe('12/25/2023, 12:30:00 PM');
  });

  it('should calculate the difference between two dates', () => {
    const date1 = new Date('2023-12-25T00:00:00.000Z');
    const date2 = new Date('2023-12-26T00:00:00.000Z');
    // The student needs to correct the calculation for the difference in days
    const differenceInMilliseconds = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    expect(differenceInDays).toBe(1);
  });

});

