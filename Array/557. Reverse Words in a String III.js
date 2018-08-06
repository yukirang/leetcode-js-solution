/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let words = s.split(" ");
    let i;
    for(i=0; i<words.length;i++){
        result.push(words[i].split("").reverse().join(""));
    }
    return result.join(" ").toString();
};