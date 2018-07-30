var plusOne = function(digits) {
    let str = '';
    let origin;
    let i;
    let result = [];
    for(i=0; i<digits.length; i++){
        str += digits[i];
    }
    origin = parseInt(str)+1;
    console.log(origin);
    for(i=0; i<digits.length; i++){
        result.unshift(parseInt(origin % 10));
        origin = parseInt(origin/10);
    }
    return result;
};

console.log(plusOne[9]);