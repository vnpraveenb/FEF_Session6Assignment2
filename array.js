/*
    Create an Array of numbers Example as var arr= [3,4,5,6,76,7,8]; 
    Push 4 elements in an existing array list. 
    Pop the inserted pushed elements. 
    Extract the elements from first index to fourth index and display the list 
    Iterate the array element using for of loop or forEach loop.
*/

var numArray = [1,2,3,4,5,6,7,8]; // Initialising the Array
var numArrayLength = numArray.length; //Storing the length of the array in a variable

document.write("<br> <br>Printing the elements of the array <hr>");
document.write("The element of the array are: ");

//For loop to print the elements of the array 
for(var i =0 ; i<numArray.length; i++)
{
     document.write(numArray[i] + "&nbsp;&nbsp;&nbsp;")
}


/* -----------Pushing 4 elements into the initialised array list.----------  */
document.write("<br> <br>Pushing 4 elements into the array<hr>");

//For loop to push the elements of the array by getting user input using prompt method
for(var j =0 ; j<4; j++)
{
    var numArrayLength = numArray.push(parseInt(prompt("Please input element " + (j+1) + " to push into the array")));
}

document.write("The elements of the pushed array are : ");

//For..of loop to print the elements of the pushed array 
for(var k of numArray)
{
     document.write( k + "&nbsp;&nbsp;&nbsp;");
}


/*------------ Popping 4 elements from the pushed array list. --------------- */
document.write("<br> <br>Popping 4 elements of the array <hr>");
document.write("Popped the elements are: ");

//For loop to pop and print the elements of the pushed array 
for(var m =0 ; m<4; m++)  
{
    document.write( numArray.pop() + "&nbsp;&nbsp;&nbsp;");
}

document.write(" <br>The elements of the popped array are: ");

//For..of loop to print the elements of the popped array 
for(var n of numArray)
{
    document.write( n + "&nbsp;&nbsp;&nbsp;")
}


/* ------ Extracting elements from first index to fourth index and displaying the list ------- */

document.write("<br> <br>Extracting 4 elements of the array <hr>");
document.write("The elements of the extracted array are: ");

//For...of loop to print the elements of the extracted array 
/* NOTE: The question was confusing so, I spliced index = 1 to index = 4 otherwise it is index = 0 to index = 3 */
for(var p of numArray.splice(1,4)) 
{
     document.write(p + "&nbsp;&nbsp;&nbsp;")
}

document.write("<br>The elements of the original array after extracting elements are: ");

//For...of loop to print the elements of the original array after extraction
for(var q of numArray)
{
    document.write(q + "&nbsp;&nbsp;&nbsp;")
}