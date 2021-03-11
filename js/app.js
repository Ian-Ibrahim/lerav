
// add item to cart
var addToCartButtons=document.getElementsByClassName('shop-item-button')
for(var i=0; i
<addToCartButtons.length;i++){
  var button =addToCartButtons[i]
  button.addEventListener('click',addToCartClicked)
}
updateCartTotal()
// update total on  quantityChange
var quantityInputs =document.getElementsByClassName('cart-quantity-input')
for(var i=0; i
	<quantityInputs.length;i++){
  var input= quantityInputs[i];
  input.addEventListener('keyup',quantityChange)
  input.addEventListener('change',quantityChange)
}
// on remove item
var removecartItemButtons =document.getElementsByClassName('btn-danger');
for(var i=0; i<removecartItemButtons.length;i++){
  var button=removecartItemButtons[i];
  button.addEventListener('click',removeCartItem)
}
function removeCartItem(event) {
  var  buttonClicked= event.target
  console.log(buttonClicked.parentElement.parentElement.id);
  var x= buttonClicked.parentElement.parentElement.id;
  localStorage.removeItem(x);
  updateCartTotal()
  location.reload()
}

function addToCartClicked(event){
  var button= event.target
  var shopItem= button.parentElement.parentElement
  var title=shopItem.getElementsByClassName('item-name')[0].innerText
  var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc=shopItem.getElementsByClassName('item-image')[0].src
  var compare=0
  console.log(title,price,imageSrc)
  var BreakException = {};

try {
  Object.keys(localStorage).forEach(function(key){
     var x=localStorage.getItem(key);
     var isEqual = JSON.stringify(localStorage.getItem(key)) === JSON.stringify(title);
     if(isEqual==true){
       alert("Item already in cart");
       compare=1;
       throw BreakException;
     }if(isEqual==false){
       // alert("coninue")
       compare=0

     }
  });
}catch (e) {
  if (e !== BreakException) throw e;
}

if(compare==0){
  addItemToCart(title,price,imageSrc)
}

}

function addItemToCart(title,price,imagesrc){
  if("productOne" in localStorage){
    if("productTwo" in localStorage){
      if("productThree" in localStorage){
        if("productFour" in localStorage){
          localStorage.setItem("productFive",title)
          localStorage.setItem("productFivePrice",price)
          localStorage.setItem("productFiveImage",imagesrc)
        }else{
          localStorage.setItem("productFour",title)
          localStorage.setItem("productFourPrice",price)
          localStorage.setItem("productFourImage",imagesrc)
        }
      }else{
        localStorage.setItem("productThree",title)
        localStorage.setItem("productThreePrice",price)
        localStorage.setItem("productThreeImage",imagesrc)
      }
    }else{
    localStorage.setItem("productTwo",title)
    localStorage.setItem("productTwoPrice",price)
    localStorage.setItem("productTwoImage",imagesrc)
  }

  }else{
    localStorage.setItem("productOne",title)
    localStorage.setItem("productOnePrice",price)
    localStorage.setItem("productOneImage",imagesrc)
  }
  if("productFive" in localStorage&&"productFour" in localStorage&&"productThree" in localStorage&"productTwo" in localStorage &&"productOne" in localStorage){
    alert("Your cart is full");
  }
  updateCartTotal()
}
function addToCart() {

}
function updateCartTotal(){
  var cartItemContainer= document.getElementsByClassName('cart-items')[0]
  var cartRows =cartItemContainer.getElementsByClassName('cart-row');
  var total=0;
  for(var i=0; i
			<cartRows.length;i++){
    var cartRow=cartRows[i];
    var priceElement =cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement =cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price= parseFloat(priceElement.innerText)
    var quantity= parseFloat(quantityElement.value)
    total= total+(price*quantity)
  }
  total= Math.round(total*100)/100
  document.getElementsByClassName('cart-total-price')[0].innerText='ksh'+total
  var productOneQuanity=document.getElementById('product-one-quantity').value
  var productTwoQuanity=document.getElementById('product-two-quantity').value
  var productThreeQuanity=document.getElementById('product-three-quantity').value
  var productFourQuanity=document.getElementById('product-four-quantity').value
  var productFiveQuanity=document.getElementById('product-five-quantity').value

  document.getElementById('list').value=" ".concat(productOneQuanity," ",localStorage.getItem("productOne"),"\r\n",
                                                    productTwoQuanity," ",localStorage.getItem("productTwo"),"\r\n",
                                                    productThreeQuanity," ",localStorage.getItem("productThree"),"\r\n",
                                                    productFourQuanity," ",localStorage.getItem("productFour"),"\r\n",
                                                    productFiveQuanity," ",localStorage.getItem("productFive"),"\r\n",
                                                  );
}
function quantityChange(event){
  var input= event.target

  if(isNaN(input.value)|| input.value<=0){
    input.value=1
  }

  updateCartTotal();
}

// product one
if("productOne" in localStorage && "productOnePrice" in localStorage && "productOneImage" in localStorage ){
  document.getElementById('product-one-title').innerHTML=localStorage.getItem("productOne");
document.getElementById('product-one-price').innerHTML=localStorage.getItem("productOnePrice");
document.getElementById("product-one-image").src = localStorage.getItem("productOneImage");
}

// product 2
if("productTwo" in localStorage && "productTwoPrice" in localStorage && "productTwoImage" in localStorage){
  document.getElementById('product-two-price').innerHTML=localStorage.getItem("productTwoPrice");
document.getElementById('product-two-title').innerHTML=localStorage.getItem("productTwo");
document.getElementById("product-two-image").src = localStorage.getItem("productTwoImage");
}

// product 3
if("productThree" in localStorage && "productThreePrice" in localStorage && "productThreeImage" in localStorage){
  document.getElementById('product-three-price').innerHTML=localStorage.getItem("productThreePrice");
document.getElementById('product-three-title').innerHTML=localStorage.getItem("productThree");
document.getElementById("product-three-image").src = localStorage.getItem("productThreeImage");
}
// product 4
if("productFour" in localStorage && "productFourPrice" in localStorage && "productFourImage" in localStorage){
  document.getElementById('product-four-price').innerHTML=localStorage.getItem("productFourPrice");
document.getElementById('product-four-title').innerHTML=localStorage.getItem("productFour");
document.getElementById("product-four-image").src = localStorage.getItem("productFourImage");
}
// product 5
if("productFive" in localStorage && "productFivePrice" in localStorage && "productFiveImage" in localStorage){
  document.getElementById('product-five-price').innerHTML=localStorage.getItem("productFivePrice");
document.getElementById('product-five-title').innerHTML=localStorage.getItem("productFive");
document.getElementById("product-five-image").src = localStorage.getItem("productFiveImage");
}
// send cart items to form
var productOneQuanity=document.getElementById('product-one-quantity').value
var productTwoQuanity=document.getElementById('product-two-quantity').value
var productThreeQuanity=document.getElementById('product-three-quantity').value
var productFourQuanity=document.getElementById('product-four-quantity').value
var productFiveQuanity=document.getElementById('product-five-quantity').value


updateCartTotal()
document.getElementById('list').value=" ".concat(productOneQuanity," ",localStorage.getItem("productOne"),"\r\n",
                                                  productTwoQuanity," ",localStorage.getItem("productTwo"),"\r\n",
                                                  productThreeQuanity," ",localStorage.getItem("productThree"),"\r\n",
                                                  productFourQuanity," ",localStorage.getItem("productFour"),"\r\n",
                                                  productFiveQuanity," ",localStorage.getItem("productFive"),"\r\n",
                                                );
// show confirm order form
function on() {
    document.getElementById("order-form").style.left = 0;
  }
// to remove order form
  function off() {
    document.getElementById("order-form").style.left = "100%";
  }
// on press confirm order
function confirmOrder(){

  const input = document.querySelector('input')
  // input.addEventListener('invalid', logValue)
  validateForm()
  // alert("Your order has been placed our team will contact you")
}
function logValue() {
  alert("uko na ujinga")
}
function validateForm(){
    var form = document.getElementById("orders"), inputs = form.getElementsByTagName("input"), input = null, flag = true;
    for(var i = 0, len = inputs.length; i < len; i++) {
        input = inputs[i];
        if(!input.value) {
            flag = false;
            input.focus();
            alert("Please fill all the inputs");
            break;
        }
        else{

        }
    }

}
// for telephone inputs
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
  hiddenInput: "full_phone",
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  initialCountry:"ke",
});
// prevent entry of letters to phone number
document.querySelector("#phone").addEventListener("keypress", function (e) {
  if (
    e.key.length === 1 && e.key !== '.' && isNaN(e.key) && !e.ctrlKey ||
    e.key === '.' && e.target.value.toString().indexOf('.') > -1
  ) {
    e.preventDefault();
  }
});
