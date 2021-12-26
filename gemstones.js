function gemstones(arr) {
   
   let counter = 0 ;
   const letters = "abcdefghijklmnopqrstuvwxyz";
   for(let letter of letters){
       
       if(arr.every(mineralString => mineralString.includes(letter)))
            counter++;
       
   }
   
return counter;
}
