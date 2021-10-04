//function declaration
function calAge1(birthyear)
{
    return 2021-birthyear;
}
const age1 = calAge1(2001);

//function expression
const age2 = function calAge2(birthyear)
{
    return 2021-birthyear;
}
const age2= calAge2(2001);
console.log(age1,age2);

//there are 2 ways to write functions in javascript (declaration and expression)
//expression produce values, we assigned the whole value of function to the variable age2
//we can call the function before defining the function too