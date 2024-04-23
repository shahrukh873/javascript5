// falsy value

// false
// 0
// -0
// BigInt 0n
// null
// undefined
// NaN
// ""

// and other are true value

// "0"
// 'false'
// " "
// []
// {}
// function(){}

// checking the value true or false

// for array

const abc = [] ;

if(abc.length===0)
{
    console.log("Array is empty");
}

// for object '

const abcd = {} ;

if(Object.keys(abcd).length===0)
{
    console.log("Object is empty");
}

// Nullish Coalesing Operator (??) : null , undefined 

// Its used when something is come form the server so if its not come then then null or undefined is come 

let var1 ;
var1 = 10 ?? 20 ;

var2 = null ?? 560 ;

var3 = undefined ?? 3949 ;




console.log(var1);
console.log(var2);

console.log(var3);


// Terniary Operator


//Condition ? true : false ;

const price = 20 ;

price>10 ? console.log("Greater than 10") :console.log("less than 10");