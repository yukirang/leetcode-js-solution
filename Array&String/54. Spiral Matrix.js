var spiralOrder = function(matrix) {
    let result = [];
    if(matrix.length===0){
        return result;
    }
    let size = matrix.length*matrix[0].length;
    let k;
    let i = 0;
    let j = 0;
    let mStart = -1;
    let mEnd = matrix.length;
    let nStart = -1;
    let nEnd = matrix[0].length;
   
    while(true){
        while(j < nEnd){
            result.push(matrix[i][j]);
            j++;
        }
        if(j === nEnd){
            mStart++;
            i++;
            j--;
        }
        while(i < mEnd){
            result.push(matrix[i][j]);
            i++;
        }
        if(i === mEnd){
            nEnd--;
            i--;
            j--;
        }
        while(j > nStart){
            result.push(matrix[i][j]);
            j--;
        }
        if(j === nStart){
            mEnd--;
            j++;
            i--; 
        }
        while(i > mStart){
            result.push(matrix[i][j]);
            i--;
        }
        if(i === mStart){
            nStart++;
            i++;
            j++;  
        }
        if(result.length >= size){
            break;
        }
    }
    if(result.length > size){
        result.splice(size,result.length-size);
    }
    return result;
};

