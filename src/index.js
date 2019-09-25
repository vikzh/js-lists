import * as pairs from 'pairs-js';

/**
 * Make a list
 * @param args
 * @returns {list}
 * @example
 * cons(1, 2, 3); // (1, 2, 3)
 * cons(); // ()
 */
const cons = (...args) => {
  const iter = (elements) => {
    if (!elements.length) {
      return null;
    }

    return pairs.cons(elements[0], iter(elements.slice(1)));
  };
  return iter(args);
};

/**
 * Check if arguments is list
 * @param list
 * @returns {boolean}
 * @example
 * isList(cons()); // true
 * isList(cons(1, 2)); // true
 * isList('text'); // false
 */
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

/**
 * Get head element
 * @param list
 * @returns {*}
 * @example
 * head(cons(1, 2)); // 1
 */
const head = (list) => {
  checkList(list);
  return pairs.car(list);
};

/**
 * Get tail element
 * @param list
 * @returns {*}
 * @example
 * tail(cons(1, 2, 3)); // (2, 3)
 */
const tail = (list) => {
  checkList(list);
  return pairs.cdr(list);
};

/**
 * Check if list is empty
 * @param list
 * @returns {boolean}
 * @example
 * isEmpty(cons(1, 2)); // false
 * isEmpty(cons()); //true
 */
const isEmpty = (list) => {
  checkList(list);
  return list === null;
};

/**
 * Add element to list
 * @param element
 * @param list
 * @returns {list}
 * @example
 * push(3, cons(2, 1)); // (3, 2, 1)
 */
const push = (element, list) => {
  checkList(list);
  return pairs.cons(element, list);
};

/**
 * Convert list to string
 * @param list
 * @returns {string}
 * @example
 * toString(cons(1, 2, 3)); // (1, 2, 3);
 * toString(cons(1, cons(2, 3))); // (1, (2, 3));
 */
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

/**
 * Check if list has an element
 * @param value
 * @param list
 * @returns {boolean}
 * @example
 * has(1, cons(1, 2)); // true
 * has(5, cons(1, 2)); // false
 */
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

/**
 * Get number of elements in a list
 * @param list
 * @returns {int}
 * @example
 * count(cons(1, 2, 3)); // 3
 * count(cons()); // 0
 */
const count = (list) => {
  checkList(list);
  if (isEmpty(list)) {
    return 0;
  }

  const iter = (elements, n) => (isEmpty(elements) ? n : iter(tail(elements), n + 1));
  return iter(list, 0);
};

/**
 * Reverse list
 * @param list
 * @returns {list}
 * @example
 * reverse(cons(1, 2, 3)); // (3, 2, 1)
 */
const reverse = (list) => {
  checkList(list);
  const iter = (curElements, acc) => (isEmpty(curElements)
    ? acc
    : iter(tail(curElements), pairs.cons(head(curElements), acc)));
  return iter(list, cons());
};

/**
 * Join 2 lists
 * @param list1
 * @param list2
 * @returns {list}
 * @example
 * concat(cons(1, 2), cons(3, 4)); // (1, 2, 3, 4)
 */
const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return pairs.cons(head(list1), concat(tail(list1), list2));
};

/**
 * Map list
 * @param f
 * @param list
 * @returns {list}
 * @example
 * const list = cons(1, 2, 3);
 * map(el => el ** 2, list); // (1, 4, 9)
 */
const map = (f, list) => {
  checkList(list);
  if (isEmpty(list)) {
    return cons();
  }
  return push(f(head(list)), map(f, tail(list)));
};

/**
 * Filter list
 * @param f
 * @param list
 * @returns {list}
 * @example
 * const list = cons(-1, 2, -5, 0, 9);
 * filter(el => el > 0, list); // (2, 9)
 */
const filter = (f, list) => {
  checkList(list);
  if (isEmpty(list)) {
    return cons();
  }
  return f(head(list)) ? push(head(list), filter(f, tail(list))) : filter(f, tail(list));
};

/**
 * Reduce list
 * @param f
 * @param acc
 * @param elements
 * @returns {*}
 * @example
 * reduce((el, acc) => acc + 1, 0, cons(1, 2, 3)); // 3
 */
const reduce = (f, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(f, f(head(elements), acc), tail(elements));
};

const take = (countNum, list) => {
  const iter = (curNum, curList) => {
    if (curNum === countNum || isEmpty(curList)) {
      return cons();
    }

    return push(head(curList), iter(curNum + 1, tail(curList)));
  };

  return iter(0, list);
};

export {
  cons, head, tail, isEmpty, toString, has, count, reverse, isList, push,
  concat, map, filter, reduce, take,
};
