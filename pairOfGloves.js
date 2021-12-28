function numberOfPairs(gloves)
{
  const glovesAndTheirOccurences = {}
  let counter = 0;
  
  for(glove of gloves){
    
    if(!(glovesAndTheirOccurences[glove])){
      glovesAndTheirOccurences[glove] = 1;
    } else {
      glovesAndTheirOccurences[glove]++;
    }
    
    if(glovesAndTheirOccurences[glove] % 2 == 0 && glovesAndTheirOccurences[glove] != 0){
      counter++;
    }
    
  }
  
  return counter;
  
}
