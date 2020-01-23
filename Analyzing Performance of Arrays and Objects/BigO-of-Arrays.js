/*
  Arrays are instrinsically ordered. While it is useful when accessing the data, it has some disadvantages.
  Best used when you need order.
  Insertion => depends
  Removal => Depends
  searching => O(n)
  Access => O(1)
*/
// Access
const names = ["Michael", "Melissa", "Andrea"];
console.log(names[2]); // This is very first as js does not count the number of items, it just jumps to the index.

// Insertion
// Generally depends on where the data is being inserted.
// When pushing at the end, it is constant time (O(1)). However, a problem arises when it is being inserted at the begining. This is because all other values have to be re-indexed since the first item has changed. Basically, it is an O(n).
// A similar issue is observed when one is removing the element from the first index or at the begining. This is because all elements have to be re-indexed.
// Therefore, push and pop is always faster than shift and unshift.

// Built in Array Methods
/*
  Push => O(1)
  Pop => O(1)
  Shift => O(N)
  Unshift => O(N)
  Concat => O(N)
  Slice => O(N)
  Splice => O(N)
  Sort => O(N * log N)
  forEach, Map, Filter, reduce, etc => O(N)
*/
