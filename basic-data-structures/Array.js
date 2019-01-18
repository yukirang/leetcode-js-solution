const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];

strings[2] //O(1)
//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)


//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 1, 'alien'); //O(n)

console.log(strings); 