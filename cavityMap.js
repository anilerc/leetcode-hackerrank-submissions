function cavityMap(grid) {
    const gridSize = grid.length;
    
    const arrOfArrays = [];
    
    grid.forEach(gridStr => { 
        arrOfArrays.push(Array.from(gridStr));
    })
    // now i have [[9,8,9], [1,9,1], [1,1,1] etc...]
    
    for(let i = 0; i<arrOfArrays.length; i++){
        for(let j = 0; j<arrOfArrays.length; j++){
            if(j != 0 && j != gridSize-1 && i != 0 && i != gridSize-1 ){
                
                let currentVal = arrOfArrays[i][j];
                const upper = arrOfArrays[i-1][j];
                const lower = arrOfArrays[i+1][j];
                const left = arrOfArrays[i][j-1];
                const right = arrOfArrays[i][j+1];
                
                if(currentVal > upper && currentVal > lower && currentVal > left && currentVal > right ){
                    arrOfArrays[i][j] = "X";
                }
                
            }
        }
    }
    const returnArray = []
    arrOfArrays.forEach(arr => {
        returnArray.push(arr.join(""));
    })
    return returnArray;
    
}
