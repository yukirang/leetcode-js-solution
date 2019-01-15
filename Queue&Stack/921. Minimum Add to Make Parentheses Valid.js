/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let count = 0;
    let stack = [];
    let s = S.split('')
   
    for (i=0;i<s.length;i++){
        if(s[i] == '('){
            stack.push(s[i]);
        }else if(s[i] == ')'){
            if(stack.length == 0){
                count++;
            }else{
                stack.pop();
            }
        }
    }
    return count + stack.length;  
};