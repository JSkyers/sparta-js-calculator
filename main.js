var calc = prompt("Which calculator would you like to use? Basic (1) or Advanced? (2)");
var basic = false;
var adva = false;
var answer = 0;

if(calc == "1") {
  var num1 = prompt("Please enter your first number");
  basic = true;
    if(num1 => 0 && basic == true) {
      var num2 = prompt("Please enter your second number");
        num1 = parseInt(num1)
    }
    if (num2 => 0 && basic == true) {
      var mode = prompt("What would you like to do? add (1), subtract (2), multiply (3) or divide? (4)");
        num2 = parseInt(num2)
    }
    if (mode == "1" && basic == true) {
      answer = num1 + num2;
      alert(answer);
    }
    if (mode == "2" && basic == true) {
      answer = num1 - num2;
      alert(answer);
    }
    if (mode == "3" && basic == true) {
      answer = num1 * num2;
      alert(answer);
    }
    if (mode == "4" && basic == true) {
      answer = num1 / num2;
      alert(answer);
    }
    else {
      location.reload();
    }
}
  else if (calc == "2") {
  var num1 = prompt("Please enter your first number")
  adva = true;
    if(num1 => 0 && adva == true) {
      var mode = prompt("What would you like? power (1) or square (2)");
       num1 = parseInt(num1)
    }
    if (mode == "1" && adva == true) {
       var num2 = prompt("Please enter your second number");
       num2 = parseInt(num2)
    }
    else if (mode == "2" && adva == true) {
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
