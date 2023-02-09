// Add your code here
function lyricsGenerator(array){
    let str = '';
    for (let i = 0; i < array.length; i++){
        if ((array[i] == 1) && (array[i - 1] == 1) && (array[i - 2] == 1))
            str += "Drop the base !!!Break the base!!! ";
        else if (array[i] == 0)
            str += "Boom ";
        else
            str += "Drop the base "
    }
    return str;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))