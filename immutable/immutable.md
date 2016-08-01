# immutable
* immutable collections for javascript
* immutable data cannot be changed once created.

## get start
* install
```
npm install immutable
```
* The case for Immutability
    - Immutable collections should be treated as _values_ rather than _objects_.
    - use the `Immutable.is()` or `.equals()` to determine value equality instead of the `===`
* copy: making another reference to it instead of copying the entire object
* javascript-first API
    - problem:
        * in es6, some function(push, set, unshift, splice) instead return a new immutable collection.
        * And some method(like slice, concat) return new array instead new immutable collections.
* Iterable:
    - Immutable can accepts a Arrays or Object
    - Immutable treat any JavaScript Array or Object as an Iterable.
    - when using JS objects to construct Immutable Maps, that JavaScript Object properties are al ways strings
* Convert back to raw JavaScript objects
    - toObject()
    - toArray()
    - toJS()
    - JSON.stringify()
* Embraces ES6
* Nested Structures
    - The collections in immutable are intended to be nested, allowing for deep trees of data, similar to JSON.
    - some power-tools:  `getIN`, `setIN`, `updateIn`
* lazy Seq
    * Seq describes a lazy operation
    * Seq is immutable
    * Seq is lazy
* Equality treats Collections as Data
* Batching Mutations

## API
### fromJS()
* Deeply converts plain Js objects and arrays to Immutable Maps and Lists
* JavaScript Object properties are always strings
### is()
* Value equality check with semantics similar to Object.is, but treats Immutable Iterables as values, equal if the second Iterable includes equivalent values.
### List, Map, OrderedMap, Set, OrderedSet, Stack
#### List
* Lists are ordered indexed dense collections, much like a Javascript Array.
* Lists are immutable
* method:
    - List.isList()
    - List.of()
    - v.last(): get last value in this List
    -
#### Map
* Immutable Map is an unordered Iterable.
### OrderedMap
### Set
### OrderedSet
### Stack
### Range()
* returns a Seq.
### Repeat()
### Record
### Seq
### Iterable
### Collection

## function
### size
### set()
#### list.set(index, value)
* index can be a negative number.
* list.set(-1, "value"): sets the last item in the list.
### delete()
#### list.delete(index):
* Values at indices above index are shifted down by 1 to fill the position
* list.delete(-1): remove last item in the list
### insert()
#### list.insert()
* Values at indices above index are shifted over by 1.
### clear()
### push()/pop()
#### list.last()
* get last value
### shift()/unshift()
#### list.first()
* get first value
### update()
#### list.update
* list.update(function)
* list.update(index, function)
* list.update(index, notSetValue, function)
### merge()
### mergeDeep()
### mergeDeepWith()
### setSize
### setIn()
### deleteIn()
### updateIn()
### mergeIn()
### mergeDeepIn()
### withMutations()
### asMutable()
### asImmutable()
### toSeq()
### tokeyedSeq()
