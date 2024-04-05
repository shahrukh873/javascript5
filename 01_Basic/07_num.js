const score = 200;

console.log(score);

// if want number default

const score1 = new Number(349) ;

console.log(typeof score1);
console.log(typeof score);

// We can convert Number to sting

console.log(score1.toString());

console.log(score1.toFixed(2));

const score2 = 289.890 ;

console.log(score2.toPrecision(4)); // here 4 words is shown 

//   Maths  //\
 
console.log(Math);

console.log(Math.round(4.6));

console.log(Math.abs(-8));

console.log(Math.ceil(4.4))  ;

console.log(Math.floor(4.4)) ;

console.log(Math.min(4 ,6 ,8, 5,)) ;

console.log(Math.max(4 ,6 ,8,3 ,7, 4)) ;


// maths . randow most important in the math function it give random value every time

// random function give value between 0 and 1 

console.log(Math.random()) ;

// i need greater than 1 

console.log(Math.random()*10);
 
// Value is betwwn 0 and 1 so there is chance of 0.01 also by these reason i have to add 1
console.log(Math.floor(Math.random()*10)+1)

// i want value in between min and max

const max = 20 ;
const min = 10 ;

console.log(Math.floor(Math.random()*(max-min+1))+min) ;