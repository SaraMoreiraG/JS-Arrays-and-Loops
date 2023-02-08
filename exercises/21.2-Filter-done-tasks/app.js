let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

//your code here
/*var asArray = Object.keys(tasks).map((key) => [tasks(key)]);
let filtered = asArray.filter(([key, value]) => typeof value === 'string');
console.log(asArray);
let toDo = filtered.filter(function (value){
	return value;
})
console.log(toDo);*/

var someJsonArray = [
	{id: 0, name: "name", property: "value", therproperties: "othervalues"},
	{id: 1, name: "name1", property: "value1", otherproperties: "othervalues1"},
	{id: 2, name: "name2", property: "value2", otherproperties: "othervalues2"}
  ];
  var finalArray = someJsonArray.map(function (obj) {
	return obj.id;
  });
  console.log(finalArray);