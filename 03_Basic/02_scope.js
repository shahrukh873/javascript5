let a = 20  ;
const  b = 30 ;
var c = 40 ;

if(1)
{
    let a = 60 ;
    const  b = 70 ;
    var c = 80 ; 
}

console.log(a);
console.log(b);
console.log(c);  // by this reason we are not using the var beause it move out of scope also 


// Learm more about scope

function one()
{
   let username = "shahrukh" ;

   function two()
   {
      let lastname =  "Mohammad" ;
      console.log(username+lastname
    )
   }
//    console.log(lastname)//IT cant access the lastname

}



one() ;


//Scope in if 

if(true)
{
    const a  = "shahrukh";

    if(a==="shahrukh")
    {
        const b = "Mohammad" ;
        console.log(a+b);
    }
}

//Hoisting

console.log(three(5)) ; 


function three(num)
{
  return num+1 ;
}
  
// console.log(d(6));//Error
const d = function(num)
{
    return num+2 ;
}

console.log(d(6)); //What if we return it to before function deacleration = it will throw a error

