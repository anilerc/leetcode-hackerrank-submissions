class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        
        for index, char in enumerate(sorted_s):
            if(char != sorted_t[index]):
                return False
        
        return True
