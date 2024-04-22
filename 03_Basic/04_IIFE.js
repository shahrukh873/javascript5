// Immediately Invoked Function Expression (IIFE)

// when we are using this it is not poluted by the global scope

(function pakoda()
{
    console.log("hello");
})() ; // iife deaclaeratuion ..

((name)=>{
    console.log(`My Name is ${name}`)
})("shahrukh") ;// We pass argument..



// pakoda(); // there is possibity that pollted by the global scope ;