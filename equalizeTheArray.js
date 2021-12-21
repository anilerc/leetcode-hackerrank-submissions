function equalizeArray(arr) {
 
 let currentMax = -1;
 const occurences = {
     
 };
 
 arr.forEach(value => {
     
     if(occurences[value]){
         occurences[value] += 1
     } else {
         occurences[value] = 1
     }
     
     if(occurences[value] > currentMax){
         currentMax = occurences[value];
     }
     
 })
 
 return arr.length - currentMax;
    
    
}
