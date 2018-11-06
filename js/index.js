function greetUser(){
  
  var test = document.getElementById("username").value;
  // Send back to page
  var hello = document.getElementById("hello");
  hello.textContent = "Hello " + test + ", Please select the items that you would like to add to your cart";
	// console.log("Hello, " + userInput + "!");
}
var cartList = [];
var cartPrice = [];

// var itemsList = ["banana", "apple", "orange", "grapes"];

// var pricesList = [3.69, 1.99, 3.50, 3.99];

function addItem(item, price){
  cartList.push(item);
  cartPrice.push(price);
}
function printItem(){
  var text = "Here are the items that you bought: ";
  for (var i = 0; i < cartList.length; i++){
    document.writeln(cartList[i] + " ");
    console.log(cartList[i]);
  }
  document.writeln(" ");
    for (var i = 0; i < cartPrice.length; i++){
    document.writeln(cartPrice[i] + " ");
      console.log(cartPrice[i]);
    }
}
//function pricesTotal(){
 //for (var i = 0; i < cartPrice.length; i++){
  // var cartSum += cartPrice[i];
 //  console.log(cartSum);
// }
//}