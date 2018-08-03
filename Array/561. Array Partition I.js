/**
 * @param {number[]} nums
 * @return {number}
 */
 let arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort(compare);
    for(i=0;i<nums.length;i+=2){
        sum += nums[i];
    }
    return sum;
};

let compare = function(a,b){
    return a-b;
}