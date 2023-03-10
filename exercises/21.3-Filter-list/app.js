let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName(arr, strFilter){
    let lowerCaseFilter = strFilter.toLowerCase();
    let lowerCaseArr = [];
    arr.forEach(function (value) {
        lowerCaseArr.push(value.toLowerCase());
    });
    let newArr = lowerCaseArr.filter(function (value){
        return (value.includes(lowerCaseFilter));
    });
    let upperCaseArr = [];
    newArr.forEach(function (value){
        upperCaseArr.push(value.charAt(0).toUpperCase() + value.slice(1));
    });
    return upperCaseArr;
}
console.log(filterByName(names, 'am'));