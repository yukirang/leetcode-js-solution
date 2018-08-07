/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i;
    if(nums.length != 0 && k!=0){
        k = k % nums.length;
        let rev = nums.splice(nums.length-k);
        console.log(rev);
        for(i=k-1;i>=0;i--){
            nums.unshift(rev[i]);
        }
    }
};

/*
	Then I found it clearer to use the ES6 spread operator:

		nums = nums.unshift(...nums.splice(nums.length-k,k));

	And the O(1)-space solution is very ingenious:
		- reverse the first part of nums
		- reverse the second part of nums
		- reverse the whole array
		
*/