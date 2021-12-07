class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        answer = []
        
        for index in range(1, n+1):
            if(index % 5 == 0 and index % 3 == 0):
                answer.append("FizzBuzz")
            elif(index % 5 == 0):
                answer.append("Buzz")
            elif(index % 3 == 0):
                answer.append("Fizz")
            else:
                answer.append(str(index))
                
        return answer
