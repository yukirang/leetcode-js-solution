/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i,j;
    for(i=0,j=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};

/*
	Note: this is the solution towards the "too pointers technique".
	An alternative solution mightbe:
		Interate the nums array
			If nums[i] equals the value
				Using splice(i,1) to delete it.
*/