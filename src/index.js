import * as pairs from 'pairs-js';

const cons = (...args) => {
  const iter = (elements) => {
    if (!elements.length) {
      return null;
    }

    return pairs.cons(elements[0], iter(elements.slice(1)));
  };
  return iter(args);
};

const isList = (list) => {
  if (list === null) {
    return true;
  }

  if (pairs.isPair(list)) {
    return isList(pairs.cdr(list));
  }

  return false;
};

const checkList = (list) => {
  if (!isList(list)) {
    let value;
    if (typeof list === 'object') {
      value = JSON.stringify(list, null, 2);
    } else {
      value = String(list);
    }
    throw new Error(`Argument must be list, but it was '${value}'`);
  }
};

const head = (list) => {
  checkList(list);
  return pairs.car(list);
};

const tail = (list) => {
  checkList(list);
  return pairs.cdr(list);
};

const isEmpty = (list) => {
  checkList(list);
  return list === null;
};

const push = (element, list) => {
  checkList(list);
  return pairs.cons(element, list);
};

const toString = (list) => {
  if (!isList(list)) {
    if (pairs.isPair(list)) {
      return `pair: ${pairs.toString(list)}`;
    }
    if (typeof list === 'object') {
      return JSON.stringify(list, null, 2);
    }
    return list;
  }

  if (isEmpty(list)) {
    return '()';
  }

  const rec = (p) => {
    const first = head(p);
    const rest = tail(p);
    if (isEmpty(rest)) {
      return toString(first);
    }

    return `${toString(first)}, ${rec(rest)}`;
  };

  return `(${rec(list)})`;
};

const has = (value, list) => {
  checkList(list);
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === value) {
    return true;
  }
  return has(value, tail(list));
};

const count = (list) => {
  checkList(list);
  if (isEmpty(list)) {
    return 0;
  }

  const iter = (elements, n) => (isEmpty(elements) ? n : iter(tail(elements), n + 1));
  return iter(list, 0);
};

const reverse = (list) => {
  checkList(list);
  const iter = (curElements, acc) => (isEmpty(curElements)
    ? acc
    : iter(tail(curElements), pairs.cons(head(curElements), acc)));
  return iter(list, cons());
};

const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return pairs.cons(head(list1), concat(tail(list1), list2));
};

const map = (f, list) => {
  checkList(list);
  if (isEmpty(list)) {
    return cons();
  }
  return push(f(head(list)), map(f, tail(list)));
};

const filter = (f, list) => {
  checkList(list);
  if (isEmpty(list)) {
    return cons();
  }
  return f(head(list)) ? push(head(list), filter(f, tail(list))) : filter(f, tail(list));
};

const reduce = (f, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(f, f(head(elements), acc), tail(elements));
};

export {
  cons, head, tail, isEmpty, toString, has, count, reverse, isList, push, concat, map, filter, reduce,
};
