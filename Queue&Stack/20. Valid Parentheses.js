/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
    let stack = [];
    let i;
    let temp;
    for(i=0;i<s.length;i++){
        if(s[i]==="("||s[i]==="["||s[i]==="{")
            stack.push(s[i]);
        else {
            let temp = stack.pop();
            if(temp === "("&&s[i]!==")" || temp === "{"&&s[i]!=="}" || temp==="["&&s[i]!=="]" || temp == undefined)
                return false;
        }
    }
    if(stack.length === 0)
        return true;
    else
        return false;
    
};