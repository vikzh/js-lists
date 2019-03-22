import {
  cons, head, tail, isEmpty,
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
});
