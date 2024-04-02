const  name = "shahrukh-Mohd"  ;

const NumberofAccount = 2 ;

console.log(name + NumberofAccount + "Mohammad"); // This is the old way to define the string

// New way

console.log(`My name is ${name} and my number of account is ${NumberofAccount}` ); // This is the New method to write here back slace is used { ` }  

const Pubg = new String('shahrukh-mohd')

// console.log(Pubg[0]);

// console.log(Pubg.__proto__);

// console.log(Pubg.length);

// console.log(Pubg.toLocaleUpperCase());

// console.log(Pubg.charAt(5));

// // Tell you the index 
// console.log(Pubg.indexOf('m'));

// we can make new substring

// const newstring = Pubg.substring(0 , 4) ; // 0 to 3 prin t last one is not print
 
// console.log(newstring);

// In Slice we can give the negative value

const anotherString =  Pubg.slice(-8,2)

console.log(anotherString);

const newstring1 = "     SHAHRUKH   MOHD " ;

console.log(newstring1);

console.log(newstring1.trim());

// url

const url  = "www.shahrukh@202.com"

console.log(url.replace('@' , '#'));

console.log(url.includes('shah'));
