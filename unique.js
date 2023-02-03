var array = ["ashik", "shuvo", "mahedi", "hassan", "nitu", "mojakkara", "mim", "ashik", "hablu", "nitu", "hassan"]

function uniqueId(array){
    let newArray = [];
for (var i = 0; i < array.length; i++){
    // console.log(array[i]);
    if(newArray.includes(array[i]) === false){
        newArray.push(array[i]);
        
        }
    }
    return newArray;
}


const unique = uniqueId(array);
console.log(unique)