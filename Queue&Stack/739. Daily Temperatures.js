/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let i,j;
    let l = temperatures.length;
    let result = new Array(l);
    result.fill(0)
    let temp;
    
    for (i=0;i<l;i++){
        temp = temperatures[i];
        for(j=i+1; j<l;j++){
            if(temperatures[j]>temp){
                result[i] = j-i;
                break;
            }     
        }      
    }
    return result;
};