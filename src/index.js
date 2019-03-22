import { cons as pairConstructor, car, cdr } from 'pairs-js';

const cons = (...args) => {
  const iter = (elements) => {
    if (!elements.length) {
      return null;
    }

    return pairConstructor(elements[0], iter(elements.slice(1)));
  };
  return iter(args);
};

const head = list => car(list);

const tail = list => cdr(list);

const isEmpty = list => list === null;

const toString = (list) => {
  const iter = (elements, str) => {
    if (isEmpty(elements)) {
      return str;
    }
    return iter(tail(elements), `${str},${head(elements)}`);
  };
  return iter(list, '');
};

const has = (value, elements) => {
  if (isEmpty(elements)) {
    return false;
  }
  if (head(elements) === value) {
    return true;
  }
  return has(value, tail(elements));
};

const count = (list) => {
  if (isEmpty(list)) {
    return 0;
  }

  const iter = (elements, n) => (isEmpty(elements) ? n : iter(tail(elements), n + 1));
  return iter(list, 0);
};

const reverse = (list) => {
  const iter = (curElements, acc) => (isEmpty(curElements)
    ? acc
    : iter(tail(curElements), pairConstructor(head(curElements), acc)));
  return iter(list, cons());
};

export {
  cons, head, tail, isEmpty, toString, has, count, reverse,
};