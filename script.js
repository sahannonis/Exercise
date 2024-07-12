
let isValid = false;

while(!isValid){
let num1 = prompt("Enter the first Number: ");
let num2 = prompt("Enter the second Number: ");



if(!isNaN(num1) || !isNaN(num2) && num2 != 0){
let sum = parseInt(num1) + parseInt(num2);
document.write(`${num1} + ${num2} = `, sum);
document.write(`<br>${num1}-${num2} = `, num1 - num2);
document.write(`<br>${num1}*${num2} = `, num1 * num2);
document.write(`<br>${num1}/${num2} = `, num1 / num2);

isValid = true;
}
else{
    alert("Invalid Number Entered Try Again.")
}
}

