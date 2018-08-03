/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    let result=[];
    while(1){
        if(numbers[i]+numbers[j] === target){
            break;
        }else if(numbers[i]+numbers[j] < target){
            i++;
        }else{
            j--;
        }
    }
    if(numbers[i]+numbers[j] === target)
    {
        result.push(i+1);
        result.push(j+1);
    }
    return result;
    
};