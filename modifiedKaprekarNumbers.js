
function kaprekarNumbers(p, q) {


    let found = false;
    const solution = []
    
    for(let i = p; i<=q; i++){
     
     if(isKaprekarNumber(i)){
         found = true;
         process.stdout.write(`${i} `);
     }
     
        
    }
    
    if(!found)
        console.log("INVALID RANGE")

    
    

}

function isKaprekarNumber(number){
    
    number = number + ""
    const digitsBeforeSquare = number.length;

    
    const parts = splitNumberIntoHalf(digitsBeforeSquare, number*number);
    
    
    
    const num1 = Number(parts[0].join(""));
    const num2 = Number(parts[1].join(""));

    
    
    return num1+num2 == number; 
    
    
}

function splitNumberIntoHalf(digitsBeforeSquare, number){
    
    number = number + ""
    
    const parts = [];
    const leftPart = [];
    const rightPart = [];
    
    const leftPartLength = number.length - digitsBeforeSquare;
    
    
    for(let i = 0; i<leftPartLength; i++){
        leftPart.push(number[i]);
    }
    
    for(let i = leftPartLength; i<number.length; i++ ){
        rightPart.push(number[i]);
    }
    
    parts.push(leftPart);
    parts.push(rightPart);
    
    return parts;
    
    
    
    
}
