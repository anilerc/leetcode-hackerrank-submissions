class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

        set_1 = set(nums1)
        set_2 = set(nums2)
        
        solution_set = set_1.intersection(set_2)
        answer = []
        
        for common_number in solution_set:
            
            first_count = nums1.count(common_number)
            second_count = nums2.count(common_number)
            least = first_count if first_count < second_count else second_count
            
            for _ in range(least):
                answer.append(common_number)
        
        return answer
