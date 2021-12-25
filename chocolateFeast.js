function chocolateFeast(n, c, m) {
    
    /*
  First I tried to understand the logic/pattern:
    5 |    2 | 1 
    3 |    1 | 1
    2 |    1 | 0
    1 |    0 | 0  
    
    Then I coded:
*/

let choco = Math.floor(n/c);
let counter = choco;
let newComer = null;
while(newComer = Math.floor(choco / m) != 0){
    
    counter += newComer;
    choco = (choco - (newComer * m)) + newComer; 

    
}
    
    return counter;
    
}
