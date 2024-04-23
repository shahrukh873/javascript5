const dcba = [1,2,3,4,5,,6,7] ;

// for each not return aNY VAlue but if want to return the value you have to use filter..


const num = dcba.filter((i)=> i>4)

const num1 = dcba.filter((i)=>{
   //{}in this you have to use return 
   return i>5 ;
})

// we can do by using for each also

//for that you have to make the empty arr and push the number


const abcd = [];

dcba.forEach((i)=>
{
    if(i>6)
    {
        abcd.push(i);
    }
})

console.log(num);
console.log(num1);
console.log(abcd) ;



