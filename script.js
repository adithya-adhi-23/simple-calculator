function addition(){
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);
   let result = firstNumber + secondNumber;
   document.getElementById('Result').innerText = 'Result: ' + result;
  }
function subtraction(){
  const firstNumber =  parseFloat(document.getElementById("firstNumber").value);
  const secondNumber =  parseFloat(document.getElementById("secondNumber").value);
   let result = firstNumber - secondNumber;
   document.getElementById('Result').innerText = 'Result: ' + result;
   
}
function multiplication(){
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber =  parseFloat(document.getElementById("secondNumber").value);
   let result = firstNumber * secondNumber;
   document.getElementById('Result').innerText = 'Result: ' + result;
    
}
function division(){
  const firstNumber =  parseFloat(document.getElementById("firstNumber").value);80503
  const secondNumber =  parseFloat(document.getElementById("secondNumber").value);
  if (secondNumber === 0) {
    document.getElementById('Result').innerText = 'Error: Cannot divide by zero';
} else {
   let result = firstNumber / secondNumber;
   document.getElementById('Result').innerText = 'Result: ' + result;
   
}
}
