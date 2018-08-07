/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let rightUp = true;
    let i=0;
    let j=0;
    let k;
    let result = [];
    let m = matrix.length;
    if( m === 0){
        return result;
    }
    let n = matrix[0].length;
    
    for(k=0; k<m*n; k++){
        result.push(matrix[i][j])
        if(rightUp){
            if(i > 0 && j < n-1){
                i--;
                j++;
            }else if(i < m-1 && j === n-1){
                i++;
                rightUp = false;
            }else if(j < n-1 && i === 0){
                j++;
                rightUp = false;
            }else break;
        }else{
            if( j > 0 && i < m-1){
                i++;
                j--;
            }else if( j < n-1 && i === m-1){
                j++;
                rightUp = true;
            }else if(j === 0 & i < m-1){
                i++;
                rightUp = true;
            }else break;
        }
    }
    return result;
};