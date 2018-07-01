var calc = prompt("Which calculator would you like to use? Basic or Advanced?");
var basic = false;
var adva = false;
var answer = 0;

if(calc == "basic") {
  var num1 = prompt("Please enter your first number");
  basic = true;
    if(num1 => 0 && basic == true) {
      var num2 = prompt("Please enter your second number");
        num1 = parseInt(num1)
    }
    if (num2 => 0 && basic == true) {
      var mode = prompt("What would you like to do? add, subtract, multiply or divide?");
        num2 = parseInt(num2)
    }
    if (mode == "add" && basic == true) {
      answer = num1 + num2;
      alert(answer);
    }
    if (mode == "subtract" && basic == true) {
      answer = num1 - num2;
      alert(answer);
    }
    if (mode == "multiply" && basic == true) {
      answer = num1 * num2;
      alert(answer);
    }
    if (mode == "divide" && basic == true) {
      answer = num1 / num2;
      alert(answer);
    }
    else {
      alert("That is not a valid number");
    }
}
  else if (calc == "advanced") {
  var num1 = prompt("Please enter your first number")
  adva = true;
    if(num1 => 0 && adva == true) {
      var mode = prompt("What would you like? power or square");
       num1 = parseInt(num1)
    }
    if (mode == "power" && adva == true) {
       var num2 = prompt("Please enter your second number");
       num2 = parseInt(num2)
    }
    else if (mode == "square" && adva == true) {
      answer = Math.sqrt(num1);
      alert(answer);
    }
    if (num2 => 0 && adva == true) {
      answer = Math.pow(num1, num2);
      alert(answer);
    }

    else {
      alert("That is not a valid number")
    }
} else {
  alert("That is not a mode");
}
