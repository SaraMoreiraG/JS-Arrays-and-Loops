// Code goes here
function matrixBuilder(input){
    let newArr = Array(input).fill(Array(input));
    for (let i = 0; i < input; i++){
        for (let j = 0; j < input; j++)
            newArr[i][j] = Math.floor(Math.random()*2);;
    }
    return newArr;
};


// do not change anything from this line down
console.log(matrixBuilder(5))