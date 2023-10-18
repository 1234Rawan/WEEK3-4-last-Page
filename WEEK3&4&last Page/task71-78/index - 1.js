
let mix ="A13BS2ZX";
let m=mix.split("").filter(function(el){
return !isNaN(parseInt(el))?el:"";
    }).map(function(ele){
        return ele*ele;
    })
    .join("");
    console.log(m);
     //TASK1
    let MIX = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
    let newMIX=MIX.map(function(el) {
        return isNaN((parseInt(el)))?el :"";
    })
    .reduce(function(acc,curr){
        return `${acc}${curr}`
    });
    console.log(newMIX);
// Elzero
console.log(`###`);
//TASK2
let myString = "EElllzzzzzzzeroo";
let newstring=myString.split("").filter(function(el,index,arr){
    return arr.indexOf(el) === index;
})
.reduce(function (acc, curr) {
return acc + curr;
});
console.log(newstring);
// Elzero
console.log(`###`);

//TASK3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myArray1=myArray
// .reduce(function(acc,cur){
//     return acc.concat(cur),[];
    
// })
.reduce(function(acc, cur) {
    return acc + cur;
});
console.log(myArray1);
// Elzero
console.log(`###`);
// TASK4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let num=numsAndStrings.splice("").filter(function(el){
    return typeof(el)==="number";
})
.map(function(el){
return -el;
})

console.log(num);
// [-1, -10, 10, 20, -5, -3]
console.log(`####`);
// TASK5
let nums = [2, 12, 11, 5, 10, 1, 99];
let newnums=nums.reduce(function(acc, cur){
    return cur%2===0?cur*acc:cur+acc;
},1)
console.log(newnums);
// 500