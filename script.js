let amount = document.getElementById("amt").value;
let duration = document.getElementById("time");
let message = document.getElementById("result");
let btn = document.getElementById("btn");

function calInterest(){
  let totalAmount = amount(1 + 0.1 * duration/12);
  message.innerHTML = "Your amount will be ₦" + totalAmount;
}

btn.addEventListener(onclick, calInterest);
console.log(amount);

console.log(calInterest());
