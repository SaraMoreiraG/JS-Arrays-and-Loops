let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
for (let i = 1; i < mySampleArray.length; i++){
    mySampleArray.unshift(mySampleArray[i]);
    mySampleArray.splice(i + 1 , 1);
    console.log(mySampleArray);
}
console.log(mySampleArray);