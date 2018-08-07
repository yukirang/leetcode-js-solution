/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let a;
    let i;
    let count = 0;
    let length = nums.length;
    for(i=0;i<length;i++){
        if(nums[i] === 0){
            nums.splice(i,1);
            count++;
            length--;
            i--;
        }
        
    }
    for(i=0;i<count;i++){
        nums.push(0);
    }
};

/*
    Note that spilce is slow.
    May just test each non-zero elements and make the former jth element = nonzero element
*/