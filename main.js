
// else if
function verifyBMI(){
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight/Math.pow(height,2);
  var roundBMI = Math.round(bmi);

  if (bmi < 18.5) {
  window.alert("Your weight is: " + roundBMI + ". You are UNDERWEIGHT");} 
  else if (bmi >= 18.5 && bmi <= 24.9) {
  window.alert("Your weight is: " + roundBMI + ". You are NORMAL");} 
  else if (bmi >=25 && bmi <= 29.9) {
  window.alert("Your weight is: " + roundBMI + ". You are OVERWEIGHT");}
  else if (bmi >=30) {
  window.alert("Your weight is: " + roundBMI + ". You are OBESE");}
  else {
  window.alert("Your weight is: " + roundBMI + ". You are ULTRA OBESE");}
  }


