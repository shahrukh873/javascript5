// nested object

const One = {

    two : 
    {
        three :
        {
            four :
            {
                Name : "shahrukh",
                LastName : 'Mohammad'

            }
        }
    }
}

console.log(One.two.three.four.LastName);

const ob1 = {1 : "a" , 2 : "b" , 3 : "c"}

const ob2 = {4 : "a" , 5 : "b" , 6 : "c"}

const ob3 = {7 : "a" , 8 : "b" , 9 : "c"}

const ob4 = Object.assign( {} , ob1 , ob2 , ob3); // Parenthsis give by these it become tarket and other beconme source  ;

console.log(ob4);

// Split method

const ob5 = {...ob1 , ...ob2 , ...ob3 }

console.log(ob5);

// const arr = [

//   {
//         email : shahrukh.gmail.com 
//     },
//     {

          
    // }
// ] // we just access the array frist than we access the object


// If you need one value again-2 then we use object de-strucutre

const Iam = {

    Frist : "Yes" ,
    Second : "No" 
}

const {Frist  : F} = Iam ; // We Can changbe the vaLUE ALSO 

console.log(F);
