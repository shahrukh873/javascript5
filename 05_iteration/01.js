// Array specific loop

// for of

// for of loop = In this loop thier is no need of to write i++ and all this thing in this we initilise varible and any object means (array,string, object) and when all thing is print it comer out of the loop


const arr = ['shahrukh', 'Mohammad']

for (const i of arr) {

    console.log(i);  
}

const abc = 'Hello World';

for (const j of abc) {

    console.log(j); 
}

// Maps = map is object which hold the key value pair eky is unique
//Map is not iteratable

const map  = new Map() ;

map.set('IN' , 'India');
map.set('USA' , "United state of america");

map.set('SA', 'Saudi Arabia');

console.log(map);

//for of loop in the map

for (const i of map) {

    console.log(i);
    
}

for (const [key,value] of map) {

    console.log(key ,"=" ,value);
} // Its not work in the object


// for in = to remove the object condition we use this
// it give the value of key

const abcd = {
  
    1 : 'one',
    2 : 'two' ,
    3 : 'three'
    
}

for (const i in abcd ) {
   
        console.log(`Value of the key ${i} and the value is ${abcd[i]}`);//it give key
    
}


const programming  = ['java', 'cpp' , 'js' , 'kotlin']

for (const i in programming) {
  console.log(i);
}


// for each


const dcba = ['java', 'cpp', 'kotlin', 'js'] ;

// In the for eack we have to pass the call back function call back function is that function in which thier is no name of the function ..
dcba.forEach(function (i)
{
    console.log(i);
})

// we can do by the arrow function also 

dcba.forEach((i)=>
{
    console.log(i);
})

// beside this we can access index , and full arr also


dcba.forEach((i , index , arr)=>
{
    console.log(i , index , arr);
})


// in js every item is object

const qwer = [
    {
        language : "javascript",
        return : "js"
    },

    {
        language : "c++",
        return : "cpp"
    },

    {
        language : "java",
        return : "java"
    }
]

qwer.forEach((i)=> 
{
    console.log(i.return);
})


