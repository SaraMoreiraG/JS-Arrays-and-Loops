let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
let aux = [];
let j = 0;
for (let i = (mySampleArray.length - 1); i >= 0; i--){
    aux[j] = mySampleArray[i];
    j++;
    console.log(mySampleArray[i]);
};