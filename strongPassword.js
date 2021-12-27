function minimumNumber(n, password) {
   

   const special_characters = "!@#$%^&*()-+"
   const guideArray = [false, false, false, false]
      
    for(let character of password){
        
        const ascii = character.charCodeAt(0)
        
        if(ascii >= 65 && ascii <= 90){ // a-z 
            guideArray[0] = true;
        } else if( ascii >= 97 && ascii <= 122){ // A-Z 
            guideArray[1] = true;
        } else if(ascii >= 48 && ascii <= 57) { // 0-9
            guideArray[2] = true;
        } else if(special_characters.includes(character)){ 
            guideArray[3] = true;
        }
    }
        
    let iNeed = 0;
    
    for(let existence of guideArray){
        if(!existence)
            iNeed++
    }
    
    
    if(n+iNeed < 6){
        iNeed += 6 - (n+iNeed);
    }
    
    return iNeed;
   

}
