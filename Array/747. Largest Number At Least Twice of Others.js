let nums = [0,0,2,3]
let dominantIndex = function(nums) {
   let largest = 0;
   let second = 0;
   let index = 0; 
   let i;
   if(nums.length === 1){
       //return 0;
   } 
   for(i=0; i<nums.length; i++) {
       if(nums[i] > largest){
           largest = nums[i];
           index = i;
       }else if(nums[i] > second){
           second = nums[i];
       }
   }
   if(largest >= 2*second){
       console.log(index);
       console.log(second);
       console.lgo(largest);
   }
   console.log(-1);
};
dominantIndex(nums);
