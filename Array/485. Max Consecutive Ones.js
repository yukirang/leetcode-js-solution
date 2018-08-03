/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 1;
    let temp = 1;
    let i;
    let j;
    if(nums.indexOf(1) == -1)
        return 0;
    if(nums.indexOf(0) == -1)
        return nums.length;
    if(nums.length === 1){
        if(nums[0] === 0)
            return 0;
        else
            return 1;
    }
    for(i=1,j=0;i<nums.length;i++){
        if(nums[i] === nums[j] && nums[i] === 1){
            if(i-j+1 > max){
                max = i-j+1;
            }
        }else{
            j = i;
        }
        
    }
    return max;
};