class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        matching_dict = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for char in s:
            if char in "([{":
                stack.append(char)
            else:
                if stack and stack[-1] == matching_dict.get(char):
                    stack.pop()
                else:
                    return False
        
        if len(stack) == 0:
            return True
        else:
            return False
    
