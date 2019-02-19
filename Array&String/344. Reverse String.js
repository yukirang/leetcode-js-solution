/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let l = s.split('');
    let i,j,temp;
    for(i=0,j=l.length-1;i<j;i++,j--){
        temp = l[i];
        l[i] = l[j];
        l[j] = temp;
    }
    return l.join('');
    
};

/*
	This is my solution towards the "two pointers" method in the "explore" tutorial;
	However, one better way might be just start from the last and end at the first.
*/

/*Update*/

//JavaScript built-in
function reverse2(str){
    return str.split('').reverse.join('');
}

//ES6
const reverse3 = str => [...str].reverse.join('');