let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    //let newArray = [...firstArray, ...secondArray]; //Option1
    let newArray = firstArray.concat(secondArray);  //Option2

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));