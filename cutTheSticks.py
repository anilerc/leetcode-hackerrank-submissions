def cutTheSticks(arr):
    solution_list = []
    
    while(len(arr) > 0):
        arr.sort()
        solution_list.append(len(arr))
        arr = [value-arr[0] for value in arr if value != arr[0]]
        
    return solution_list
