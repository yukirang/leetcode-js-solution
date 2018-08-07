/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    let first = [1];
    let second = [1,1];
    let i,j,k;
    
   
    if(rowIndex === 0){
        result.push(first);
    }
    else if(rowIndex === 1){
        result.push(first);
        result.push(second);
    }
    else{
        result.push(first);
        result.push(second);
    
        for(i=2;i<rowIndex+1;i++){
            let temp=[];
            temp.push(1);
            for(j=1;j < i;j++){
                temp.push(result[i-1][j-1]+result[i-1][j]);
            }
            temp.push(1);
            result.push(temp);
        }
    }
    return result[rowIndex];

};

/*
    The O(k)-space solution:
        -Create a (length=k+1) array and fill it with 1,0,0...
        -Start from the last element, every ele = sum of 2 prior eles
        -Loop until the last ele === 1
*/