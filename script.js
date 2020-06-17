let amount = document.getElementById("amt");
let duration = document.getElementById("time");
let message = document.getElementById("result");
let btn = document.getElementById("btn");
let rate = 0.1;

function calInterest(){
  // totalAmount = amount.value + (amount.value * rate * duration.value/12);
  totalAmount = amount.value * (1 + (rate) * (duration.value/12));
  message.innerHTML = "Your amount will be ₦" + totalAmount;
}

btn.addEventListener(onclick, calInterest);
console.log(totalAmount);

console.log(calInterest());
