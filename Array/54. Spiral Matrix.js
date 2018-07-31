var sample = [[1,2,3],[4,5,6],[7,8,9]];

var spiralOrder = function(matrix) {
    let result = [];
    let mStart = -1;
    let mEnd = matrix.length;
    let nStart = -1;
    let nEnd = matrix[0].length;
    let m = matrix.length;
    let n = matrix[0].length;
    let k;
    let i = 0;
    let j = 0;
    console.log(i+' '+j+ ' ' +nEnd);
    while(true){
        while(j < nEnd){
            result.push(matrix[i][j]);
            j++;
        }
        if(j === nEnd){
            mStart++;
            i++;
            j--;
            console.log(i+' '+j+' '+mStart);
        }
        while(i < mEnd){
            result.push(matrix[i][j]);
            i++;
        }
        if(i === mEnd){
            nEnd--;
            i--;
            j--;
           
            console.log(i+' '+j+ ' ' +nEnd);
        }
        while(j > nStart){
            result.push(matrix[i][j]);
            j--;
        }
        if(j === nStart){
            mEnd--;
            j++;
            i--; 
            console.log(i+' '+j+ ' ' +mEnd); 
        }
        while(i > mStart){
            result.push(matrix[i][j]);
            i--;
        }
        if(i === mStart){
            nStart++;
            i++;
            j++;
            console.log(i+' '+j+ ' ' +nStart); 
        }
        
    }
    return result;
};

console.log(spiralOrder(sample))