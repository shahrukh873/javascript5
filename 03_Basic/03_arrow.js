// arrow n the java

const user = {

    fristname : "Shahrukh" ,
    LastName  : "Mohammad" ,

    welcome : function()
    {
        console.log(`${this.fristname} , Welcome to the my Page`);  // this keyword give you current context ; 

        // console.log(this);
    }
}


// user.welcome();
// user.fristname = "khan" ;
// user.welcome(); 

// console.log(this) ; // Outside the local means global have empty this ..

// Priviosly we only use broweser but now we use many think like  node and manty more ;

// So in broweser this in not empty beacuse this have window ..


function five()
{
    username : "shahrukh",
    console.log(this.username)
}

five() ;

// this in functin not give the current instance it give undefined result


// function this is not empty it have mnay value you can run and find it .


// Now we move to the arrow function

// () => // by this way we are using thee arrow function

const six = (num1 , num2) => 
{
    return num1+num2 ;
}

// Scecond way

const seven = (num1 , num2) => (num1 + num2)
// When we use {}then we have to wright return also and if we use only () then there is no need to write return 

console.log(six(5,6));

console.log(seven(5,6));