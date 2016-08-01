var Immutable = require('immutable');
//create
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
// console.log( map1.get('b') );
// console.log( map2.get('b') );
//compare
// console.log( map1.equals(map2) === true );
var map3 = map1.set('b', 50);
// console.log( map2.equals(map3) === true );
//function
var list1 = Immutable.List.of(1,2);
var list2 = list1.push(3,4,5);
var list3 = list2.unshift(0);
// console.log( list2 );
// console.log( list3 );
var list4 = list1.concat( list2, list3 );
// console.log( list4 );
//seq
var myObject = {a:1,b:2,c:3};
// console.log( Immutable.Seq(myObject).map(x => x * x).toObject() );
var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8)
        .filter(x => x % 2).map(x => x * x);
// console.log( oddSquares );
var seq = Immutable.Map({a:1, b:1, c:1}).toSeq();
// console.log( seq );
// console.log( seq.flip().map(key => key.toUpperCase()).flip().toObject() );
//fromJs()
var formJsList = Immutable.fromJS({1:2,a: {b: [10, 20, 30]}, c: 40});
// console.log( formJsList.get(1) );
//list
var List = Immutable.List([1,2]);
// console.log( List );
// console.log( Immutable.List.isList( List ) );
// console.log( List.size );
// console.log( List.set(2,3));
// console.log( List.update(2, 4) );
// console.log( Immutable.List.of( 1 ) );
// console.log( List.set(-1, "value") );
// console.log( List.set(3, "value") );
// console.log( List.delete(0) );
var List2 =  List.push(3);
// console.log( List2 );
// console.log( List2.pop() );
// console.log( List2.push(4) );
// console.log( List2.shift(4) );
// console.log( List2.unshift(4) );
var List3 = List2.update((value)=>value.push(5));
// console.log( List3 );
// console.log( List3.update(1, (value)=>-1) );
// console.log( List3.update(5, 0, (value)=>value+1 ) );
// console.log( List2.merge( list3, list1 ) );
// console.log( List2.merge([2,6,7,8,9,0]));
// console.log( List2.mergeDeep([2,45]) );
var List4 = Immutable.List( [1,2] );
var List5 = List4.mergeDeepWith(function(p, n, k){
    // console.log( p,n,k);
}, [0]);
// console.log( list4 );
// console.log( List4.setSize( 4 ) );
// console.log( List4.setIn(Immutable.List( [1] ), 3) );
// console.log( List4.deleteIn([3]) );
var List5 = Immutable.List([1,2,3,4]);
// console.log(List5.updateIn([1], (value)=>value+1))
// console.log(List5.updateIn([4], 3, (value)=>value+1))
// console.log( List5.mergeIn([1], List4, list2) );
// console.log( List5.withMutations(function(list){
//     list.push(44).push(22);
// }) );
// console.log( List5 );
// console.log( List5.asMutable() );
// console.log( List5.toSeq() );
// console.log( List5.toKeyedSeq() );
// console.log( List5.toIndexedSeq() );
// console.log( List5.toSetSeq() );
// console.log( List5.fromEntrySeq() );
var List6 = Immutable.List([2,3]);
var List7 = Immutable.List([2,3]);
// console.log( List6.equals(List7) );
// console.log( List6 == List7 );
// console.log( List6 === List7 );
console.log( List6.hashCode() );
console.log( List6.keySeq() );
console.log( List6.valueSeq() );
console.log( List6.entrySeq() );



