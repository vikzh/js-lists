import {
  cons, head, tail, isEmpty, isList, reverse, toString, push, count, concat, map, filter, reduce,
} from '../src';

describe('List', () => {
  it('#cons', () => {
    const list = cons(1, 2, 3);
    expect(head(list)).toBe(1);
    expect(head(tail(list))).toBe(2);
    expect(head(tail(tail(list)))).toBe(3);
  });

  it('#isEmpty', () => {
    const list = cons();
    expect(isEmpty(list)).toBe(true);

    const list2 = cons(1, 2);
    expect(isEmpty(list2)).toBe(false);
  });

  it('#isList', () => {
    const list = cons();
    expect(isList(list)).toBe(true);

    const list2 = cons(1, 2, 3, 4);
    expect(isList(list2)).toBe(true);

    const list3 = cons('text', 2, [3, 4]);
    expect(isList(list3)).toBe(true);

    expect(isList(1)).toBe(false);

    expect(isList('text')).toBe(false);
  });

  it('#checkList', () => {
    expect(() => {
      head('test');
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      head(1);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      reverse('mytext');
    }).toThrowErrorMatchingSnapshot();
  });

  it('#toString', () => {
    const list = cons();
    expect(toString(list)).toBe('()');

    const list2 = cons(1, 2, 3);
    expect(toString(list2)).toBe('(1, 2, 3)');
  });

  it('#push', () => {
    const list = cons(2, 3);
    const updatedList = push(1, list);
    expect(toString(updatedList)).toBe('(1, 2, 3)');
  });

  it('#count', () => {
    const list = cons();
    expect(count(list)).toBe(0);

    const list2 = cons(1);
    expect(count(list2)).toBe(1);

    const list3 = cons('text', 'anotherText', 5);
    expect(count(list3)).toBe(3);
  });

  it('#reverse', () => {
    const list = cons(1, 2, 3);
    const reversedList = reverse(list);
    expect(toString(reversedList)).toBe('(3, 2, 1)');
  });

  it('#concat', () => {
    const list = cons(1, 2, 3);
    const list2 = cons(4, 5);
    const concatedList = concat(list, list2);
    expect(toString(concatedList)).toBe('(1, 2, 3, 4, 5)');
  });

  it('#map', () => {
    const list = cons(1, 2, 3);
    const squaredList = map(el => el ** 2, list);
    expect(toString(squaredList)).toBe('(1, 4, 9)');
  });

  it('#filter', () => {
    const list = cons(-3, 2, 0, 5);
    const filteredList = filter(el => el > 0, list);
    expect(toString(filteredList)).toBe('(2, 5)');
  });

  it('#reduce', () => {
    const list = cons(1, 2, 3, 4);
    const symOfElements = reduce((element, acc) => acc + element, 0, list);
    expect(symOfElements).toBe(10);
  });
});
