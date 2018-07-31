/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    let first = [1];
    let second = [1,1];
    let i,j,k;
    
    if(numRows === 0){
        return result;
    }
    if(numRows === 1){
        result.push(first);
    }
    else if(numRows === 2){
        result.push(first);
        result.push(second);
    }
    else{
        result.push(first);
        result.push(second);
    
        for(i=2;i<numRows;i++){
            let temp=[];
            temp.push(1);
            for(j=1;j < i;j++){
                temp.push(result[i-1][j-1]+result[i-1][j]);
            }
            temp.push(1);
            result.push(temp);
        }
    }
    return result;
};