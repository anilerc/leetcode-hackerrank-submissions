function permutationEquation(p) {
   
  const resultArray = []
  const valueToIndexPair = {}
  
  p.forEach((value, index) => {
     valueToIndexPair[value] = (index+1);
  })
  
  console.log(valueToIndexPair)
  
  for(let i = 1; i<=p.length; i++){
     const bridge = valueToIndexPair[i];
     const output = valueToIndexPair[bridge];
     
    resultArray.push(output);
  }
  
  return resultArray;
   
}
