class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        
        solution = []
        hashmap_values = {}
        
        for index, number in enumerate(nums):
            if(target-number in hashmap_values.keys()):
               solution.append(index)
               solution.append(hashmap_values.get(target-number))
            else: 
                hashmap_values[number] = index
               
        
        return solution