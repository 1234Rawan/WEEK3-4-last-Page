function multiply(...num){
   let res=0
for(let i=0;i<num.length;i++)
{
    if(typeof num[i] === 'String')
    {
continue;
    }
    else{
res=parseInt(num[i-1]) * parseInt(num[i]);
    }
}
return res;
}


console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000