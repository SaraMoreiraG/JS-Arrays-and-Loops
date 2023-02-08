let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let newstr = par.replace(/\s/g,'');
for (let i = 0; i < newstr.length; i++){
    let letter = newstr[i].toLowerCase();
    if (counts[letter] == undefined)
        counts[letter] = 1;
    else
        counts[letter] += 1;
}
console.log(counts);