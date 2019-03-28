[![Maintainability](https://api.codeclimate.com/v1/badges/2f5be02a978a6a89bd3d/maintainability)](https://codeclimate.com/github/vikzh/js-lists/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/2f5be02a978a6a89bd3d/test_coverage)](https://codeclimate.com/github/vikzh/js-lists/test_coverage)[![Build Status](https://travis-ci.org/vikzh/js-lists.svg?branch=master)](https://travis-ci.org/vikzh/js-lists)
# js-lists
## Install
````
npm install lists-js
````
## Using
````
import {cons, head, tail, isEmpty, toString, has, count, reverse, isList, push,
        concat, map, filter, reduce, } from 'lists-js'

const list = cons(1, 2, 3); // (1, 2, 3)
head(list); // 1
tail(list); // (2, 3)
isList(list); // true
isList('text'); // false
push(0, list); // (0, 1, 2, 3)
toString(list); // (1, 2, 3)
has(3, list); // true
count(list); // 3
````
## Documentation
### Table of Contents

-   [cons][1]
    -   [Parameters][2]
    -   [Examples][3]
-   [isList][4]
    -   [Parameters][5]
    -   [Examples][6]
-   [head][7]
    -   [Parameters][8]
    -   [Examples][9]
-   [tail][10]
    -   [Parameters][11]
    -   [Examples][12]
-   [isEmpty][13]
    -   [Parameters][14]
    -   [Examples][15]
-   [push][16]
    -   [Parameters][17]
    -   [Examples][18]
-   [toString][19]
    -   [Parameters][20]
    -   [Examples][21]
-   [has][22]
    -   [Parameters][23]
    -   [Examples][24]
-   [count][25]
    -   [Parameters][26]
    -   [Examples][27]
-   [reverse][28]
    -   [Parameters][29]
    -   [Examples][30]
-   [concat][31]
    -   [Parameters][32]
    -   [Examples][33]
-   [map][34]
    -   [Parameters][35]
    -   [Examples][36]
-   [filter][37]
    -   [Parameters][38]
    -   [Examples][39]
-   [reduce][40]
    -   [Parameters][41]
    -   [Examples][42]

## cons

Make a list

### Parameters

-   `args` **...any**

### Examples

```javascript
cons(1, 2, 3); // (1, 2, 3)
cons(); // ()
```

Returns **list** 

## isList

Check if arguments is list

### Parameters

-   `list`  

### Examples

```javascript
isList(cons()); // true
isList(cons(1, 2)); // true
isList('text'); // false
```

Returns **[boolean][43]** 

## head

Get head element

### Parameters

-   `list`  

### Examples

```javascript
head(cons(1, 2)); // 1
```

Returns **any** 

## tail

Get tail element

### Parameters

-   `list`  

### Examples

```javascript
tail(cons(1, 2, 3)); // (2, 3)
```

Returns **any** 

## isEmpty

Check if list is empty

### Parameters

-   `list`  

### Examples

```javascript
isEmpty(cons(1, 2)); // false
isEmpty(cons()); //true
```

Returns **[boolean][43]** 

## push

Add element to list

### Parameters

-   `element`  
-   `list`  

### Examples

```javascript
push(3, cons(2, 1)); // (3, 2, 1)
```

Returns **list** 

## toString

Convert list to string

### Parameters

-   `list`  

### Examples

```javascript
toString(cons(1, 2, 3)); // (1, 2, 3);
toString(cons(1, cons(2, 3))); // (1, (2, 3));
```

Returns **[string][44]** 

## has

Check if list has an element

### Parameters

-   `value`  
-   `list`  

### Examples

```javascript
has(1, cons(1, 2)); // true
has(5, cons(1, 2)); // false
```

Returns **[boolean][43]** 

## count

Get number of elements in a list

### Parameters

-   `list`  

### Examples

```javascript
count(cons(1, 2, 3)); // 3
count(cons()); // 0
```

Returns **int** 

## reverse

Reverse list

### Parameters

-   `list`  

### Examples

```javascript
reverse(cons(1, 2, 3)); // (3, 2, 1)
```

Returns **list** 

## concat

Join 2 lists

### Parameters

-   `list1`  
-   `list2`  

### Examples

```javascript
concat(cons(1, 2), cons(3, 4)); // (1, 2, 3, 4)
```

Returns **list** 

## map

Map list

### Parameters

-   `f`  
-   `list`  

### Examples

```javascript
const list = cons(1, 2, 3);
map(el => el ** 2, list); // (1, 4, 9)
```

Returns **list** 

## filter

Filter list

### Parameters

-   `f`  
-   `list`  

### Examples

```javascript
const list = cons(-1, 2, -5, 0, 9);
filter(el => el > 0, list); // (2, 9)
```

Returns **list** 

## reduce

Reduce list

### Parameters

-   `f`  
-   `acc`  
-   `elements`  

### Examples

```javascript
reduce((el, acc) => acc + 1, 0, cons(1, 2, 3)); // 3
```

Returns **any** 

[1]: #cons

[2]: #parameters

[3]: #examples

[4]: #islist

[5]: #parameters-1

[6]: #examples-1

[7]: #head

[8]: #parameters-2

[9]: #examples-2

[10]: #tail

[11]: #parameters-3

[12]: #examples-3

[13]: #isempty

[14]: #parameters-4

[15]: #examples-4

[16]: #push

[17]: #parameters-5

[18]: #examples-5

[19]: #tostring

[20]: #parameters-6

[21]: #examples-6

[22]: #has

[23]: #parameters-7

[24]: #examples-7

[25]: #count

[26]: #parameters-8

[27]: #examples-8

[28]: #reverse

[29]: #parameters-9

[30]: #examples-9

[31]: #concat

[32]: #parameters-10

[33]: #examples-10

[34]: #map

[35]: #parameters-11

[36]: #examples-11

[37]: #filter

[38]: #parameters-12

[39]: #examples-12

[40]: #reduce

[41]: #parameters-13

[42]: #examples-13

[43]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[44]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
