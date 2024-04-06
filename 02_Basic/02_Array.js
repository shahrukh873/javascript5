const arr = ['one', 'two', 'three'] ;

const arr1 = ["four" , "five" , "six"] ;


// when we use the push 2nd array added in 1st array in array itself

// arr1.push(arr);

// console.log(arr1);

// console.log(arr1[3][2]); // 3rd position is 2ned array and 2nd positin from 3rd array--- so answer will be three

// To remove this conditon we are using the concat

// Concate = concat make new array form two array ;

const arr2 = arr.concat(arr1);

console.log(arr2) ;

// split

const arr3 = [...arr , ...arr1] ;

console.log(arr3);

//flat 

const arr5 = [1,2,3,4,[5,6],[7,8 ,[9,10]] ,11]

const arr6  = arr5.flat(Infinity);

console.log(arr6);

// Converte anything to the array


console.log(Array.isArray("shahrukh"));

console.log(Array.from("shahrukh"));

