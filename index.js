var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 }
 cart.push(newItem)
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length===0){
    return 'Your shopping cart is empty.'
  }
  let shoppingCart = "In your cart, you have"
  for(let i = 0; i < cart.length; i++){
    if(cart.length === 1){
      return shoppingCart + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if(i===cart.length-1){
      shoppingCart = shoppingCart + `, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
          return shoppingCart      
    }else{
      shoppingCart = shoppingCart + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
