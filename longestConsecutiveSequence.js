var longestConsecutive = function(nums) {
    
   nums.sort( (a,b) => a-b);
  
    if(nums.length == 0 || nums.length == 1)
        return nums.length;
    
    let currentCtr = 1;
    let max = 1;
    
    
    for(let i=1; i<nums.length; i++){
        
        if(nums[i] == nums[i-1]){
            continue;
        } else if(nums[i] == nums[i-1]+1){
            currentCtr++;
        } else{
            max = max > currentCtr ? max : currentCtr;
            currentCtr = 1;
        }
        
       max = max > currentCtr ? max : currentCtr; // final check
        
    }
    
    return max;
};
