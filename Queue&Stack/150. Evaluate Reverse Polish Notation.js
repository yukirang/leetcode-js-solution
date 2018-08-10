/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let i;
    let x,y;
    for(i=0;i<tokens.length;i++)
    if (!isNaN(tokens[i])){
        stack.push(parseInt(tokens[i]));
    }else{
        y = stack.pop();
        x = stack.pop();
        stack.push(operate(x,y,tokens[i]));
    }
    return stack[0];
};

var operate = function(x,y,op){
    if(op === '+')
        return x+y;
    else if(op === '-')
        return x-y;
    else if(op === '*')
        return x*y;
    else if(op === '/')
        return parseInt(x/y);
}