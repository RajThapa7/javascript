// program to find the factorial of a number
function facto(){
    let num = document.getElementById('n').value;
  function factorial(num){
    
    // if number is 0
    if (num == 0) {
        return 1;
    }
  
    // if number is positive
    else {
        return  num * factorial(num - 1);
    }
  };
  document.getElementById("demo").innerHTML = `Factorial is ${factorial(num)} `;
  }

