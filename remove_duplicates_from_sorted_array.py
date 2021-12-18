class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        duplicated_nums = set()
        
        counter = 0
        
        for number in nums:
            
            if(number not in duplicated_nums):
                duplicated_nums.add(number)
                nums[counter] = number
                counter = counter + 1
                
        return counter
        
       
      
        
