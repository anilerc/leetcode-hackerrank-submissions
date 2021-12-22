
function bigSorting(unsorted) {
    unsorted.sort(sortingLogic);
    
    return unsorted;

}

function sortingLogic(n1, n2){
    
    if(n1.length == n2.length){
        for(let i=0; i<n1.length; i++){
            if(n1[i] > n2[i]){
                return 1;
            } 
            
            if(n1[i] < n2[i]){
                return -1;
            }
        }        
    } else {

        return n1.length > n2.length ? 1 : -1;
        
    }
    
    return 0;

}
