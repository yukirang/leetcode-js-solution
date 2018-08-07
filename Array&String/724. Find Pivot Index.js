/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    let sum = 0;
    let temp = 0;
    let i;
   
    
    for(i=0;i<nums.length;i++){
        sum += nums[i];
    }
    for(i=0;i<nums.length;i++){
        if(temp === sum-temp-nums[i]){
            return i;
        }else{
            temp += nums[i];
        }
    }
    return -1;
};