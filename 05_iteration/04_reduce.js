// redece=  it is use 
//  calculation preceding  value 


const num = [1,2,3,4,5]

const num1 = num.reduce(function(i,j)
{
    console.log(`acculator ${i} current value ${j}`)
    return i + j ;
},0)

console.log(num1);