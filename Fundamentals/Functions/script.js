function fruit(apples, oranges) //created function called fruit
{
    console.log(apples,oranges);
    const juice='juice with ${apples} apples and ${oranges} oranges';
    return juice;
}
const finaljuice =fruit(5,1); // returns value of a function so we need to store it in variable 
console.log(finaljuice); //to check the output of the function 
console.log(fruit(5,1));//alternative method if you dont want to create another variable