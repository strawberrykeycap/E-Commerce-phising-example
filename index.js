let arrayIndex = 0;
let currentIndex = 0;
let imageArray = ["image0,image1,image2,image3,image4"];
let cartItems = 0; 
let inputField = 0;
let price = '$5.99';
let cart = {

    coupon: "code invalid",
    shipping: "$5.99", 
    total: "$0",
    item1: " "// How Can I add items to object procedurely ?
};

// document.getElementById("next-shoe").addEventListener("click", nextImage); 
// document.getElementById("previous-shoe").addEventListener("click", prevImage);
//Index of Array always starts at 0 for now
//The program should select for the index above or below
//    program need the current index
// Then the program needs to add or subtract from that value

// function nextImage() { 
//      currentIndex += 1; 
//     document.getElementById("current-shoe").innerHTML = imageArray[currentIndex];
// }

// function prevImage() {
//     currentIndex -= 1;
//     document.getElementById("current-shoe").innerHTML = imageArray.[currentIndex];
// }


 document.getElementById("card-input-plus").addEventListener("click", addToInput);
 document.getElementById("card-input-minus").addEventListener("click", subtractFromInput);
 document.getElementById("card-input-plus").addEventListener("click", addToInputField);
 
function addToInput(){
     let newCart =  cartItems += 1;
     if (newCart < 0 ){
        newCart === 0
     };
     console.log("test");   
     document.getElementById("shopping-cart").innerHTML =`${newCart}`;  
  
}

function addToInputField() {
    let newInput = inputField += 1; 
    console.log( inputField  );
    document.getElementById('card-input-CART').textContent =`${newInput}`;
    
}

function subtractFromInput() {
    let newestCart = cartItems -= 1;
    if (newestCart < 0 ){
        newestcart === 0
     };
    document.getElementById("shopping-cart").innerHTML =`${newestCart}`;  
}


