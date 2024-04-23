const num = [1,2,3,4,5,6,7,8,9,10]

//map is also like forEach but it returnh the value

const num1 = num.map((i)=>{
    return i+10 ;
})

console.log(num1);

// We can add multiple map or many condition simantanusy


const num2 = num.map((i)=>i+10).map((i)=>i+1);

console.log(num2)