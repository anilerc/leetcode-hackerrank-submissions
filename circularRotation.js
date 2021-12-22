// unshift can be changed with reverse+push...

function circularArrayRotation(a, k, queries) {


const queryResults = [];

for(let i = 0; i<k; i++){
    performRotation(a);
}

queries.forEach(query => {
    queryResults.push(a[query]);
})

return queryResults;





}

function performRotation(arr){

const lastElement = arr[arr.length-1];

arr.unshift(lastElement);

arr.splice(arr.length-1, 1);

return arr;



}
