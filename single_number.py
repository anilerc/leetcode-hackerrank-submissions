class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        
        solution = []
        
        # mapping method: Occurence - Number.
        
        for number in nums:
            if(number in solution):
                solution.remove(number)
            else:
                solution.append(number)
            
        return solution[0]
            
