const arr = [0,1,2,3,4,5,6] ;

console.log(arr[2]);

// Array have sallow copy means copy by the referene means if we change the value original value also change

arr.push(8);

arr.pop();
console.log(arr);

arr.unshift(8);

console.log(arr);

arr.shift();

// Answer in boolen 
console.log(arr.includes(0));

//Tell the index number of element

console.log(arr.indexOf(8));

// Array is converted to string by the Join

console.log(arr);

const newarr = arr.join();

console.log(newarr); // Its converted to the string 

//slice and splice

const newarr4 = arr.slice(1,4);
console.log(newarr4) ;
console.log(arr);

// Splice

const newarr5 = arr.splice(1,3);

console.log(newarr5);

console.log(arr);

