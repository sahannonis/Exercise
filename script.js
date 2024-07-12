
let isValid = false;

while(!isValid){
let num1 = prompt("Enter the first Number: ");
let num2 = prompt("Enter the second Number: ");



if(!isNaN(num1) || !isNaN(num2) && num2 != 0){
document.write("Number 1 = ", num1);
document.write("<br>Number 2 = ", num2);
let sum = parseInt(num1) + parseInt(num2);
document.write("<br>Number 1 + Number 2 = ", sum);
document.write("<br>Number 1 - Number 2 = ", num1 - num2);
document.write("<br>Number 1 * Number 2 = ", num1 * num2);
document.write("<br>Number 1 / Number 2 = ", num1 / num2);

isValid = true;
}
else{
    alert("Invalid Number Entered Try Again.")
}
}

