
import { describe, it, expect } from 'vitest';

describe('JSON tests', () => {
  
  it('should stringify an object into JSON', () => {
    const student = {
      name: 'Stella',
      age: 20,
      courses: ['HTML', 'CSS', 'JS'],
      occupation: null
    };
    // Students should fix the expected JSON string
    expect(JSON.stringify(student)).toBe('{"name":"Stella","age":20,"courses":["HTML","CSS","JS"],"occupation":null}');
  });

  it('should ignore function properties when stringifying', () => {
    const book = {
      title: 'Gone With the Wind',
      printTitle: function() { console.log(this.title); },
      releaseDate: undefined
    };
    // Students should fix the expected JSON string to only contain the title
    expect(JSON.stringify(book)).toBe('{"title":"Gone With the Wind"}');
  });

  it('should throw an error when trying to stringify circular references', () => {
    const room: {
      number: number;
      occupiedBy?: object;
  } = { number: 23 };
    const meetup: {
      title: string;
      participants: string[];
      place?: object;
    } = { title: 'Strategy Conference', participants: ['Chris', 'Tina'] };
    meetup.place = room;
    room.occupiedBy = meetup;
    // Students should fix the test to expect an error
    expect(() => JSON.stringify(meetup)).toThrow();
  });

  it('should use a replacer function to filter properties during stringification', () => {
    const meetup = {
      title: 'Strategy Conference',
      participants: ['Chris', 'Tina'],
      date: '2023-06-01'
    };
    // Students should fix the replacer function to correctly filter properties
    const filteredJSON = JSON.stringify(meetup, (key, value) => {
      if (key === 'date') return undefined;
      return value;
    });
    expect(filteredJSON).toBe('{"title":"Strategy Conference","participants":["Chris","Tina"]}');
  });

  it('should parse a JSON string and transform dates into Date objects', () => {
    const meetupJSON = '{"title":"Strategy Conference","participants":["Chris","Tina"],"date":"2023-06-01"}';
    // Students should fix the reviver function to correctly parse dates
    const meetupParsed = JSON.parse(meetupJSON, (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
    expect(meetupParsed.date instanceof Date).toBe(true);
  });

});

