function repeatedString(s, n) {
    
    const lengthOfStr = s.length;
    let a_in_remains = 0;
    let a_in_full = 0;
    const fullOccurences = Math.floor(n / lengthOfStr);
    const remains = n % lengthOfStr;
    
    for(let i = 0; i<lengthOfStr; i++){
        
        if(s[i] == "a" && (i<=remains-1)){
            a_in_full++;
            a_in_remains++;
        } else if(s[i] == "a" && (i > remains-1)){
            a_in_full++;
        }
        
        
    }
    
    const result = fullOccurences * a_in_full + a_in_remains;
    
    return result;
    
     
    
    
    

}
