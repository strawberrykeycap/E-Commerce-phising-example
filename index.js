//Use of actual login values is temporary
// refactor to use dummy values
// let variable = "hello"; 
// let userName = getElementById('username'); 
// let realUser = userName; 
// console.log(realUser);
// console.log(userName);




 let email = document.getElementById("username");
 let emailValue;


 email.addEventListener('input', function(emailValue){
    emailValue = email.value; 
   // emailValue.push(email.value);
   console.log(email.value);
   console.log(emailValue); 
 })


let password = document.getElementById('userpass');
let passwordValue;

password.addEventListener('input', function(passwordValue){
  passWordValue = password.value; 
  console.log(passwordValue);
  console.log(password.value);
} )

let loginButton = document.getElementById('loginButton');
 





//popup Logged In! login Hello{{$email} your password is {$password}

// LBtw This is a (fake)phisphing website
//All data is stored locacally(it's safe)
//learn better security hygiene @_______________________
//popup logout Logged out!


// let arrayIndex = 0;
// let currentIndex = 0;
// let imageArray = ["image0,image1,image2,image3,image4"];
// let cartItems = 0; 
// let inputField = 0;
// let price = '$5.99';
// let cart = {

//     coupon: "code invalid",
//     shipping: "$5.99", 
//     total: "$0",
//     item1: " "// How Can I add items to object procedurely ?
// };

// // document.getElementById("next-shoe").addEventListener("click", nextImage); 
// // document.getElementById("previous-shoe").addEventListener("click", prevImage);
// //Index of Array always starts at 0 for now
// //The program should select for the index above or below
// //    program need the current index
// // Then the program needs to add or subtract from that value

// // function nextImage() { 
// //      currentIndex += 1; 
// //     document.getElementById("current-shoe").innerHTML = imageArray[currentIndex];
// // }

// // function prevImage() {
// //     currentIndex -= 1;
// //     document.getElementById("current-shoe").innerHTML = imageArray.[currentIndex];
// // }


//  document.getElementById("card-input-plus").addEventListener("click", addToInput);
//  document.getElementById("card-input-minus").addEventListener("click", subtractFromInput);
//  document.getElementById("card-input-plus").addEventListener("click", addToInputField);
 
// function addToInput(){
//      let newCart =  cartItems += 1;
//      if (newCart < 0 ){
//         newCart === 0
//      };
//      console.log("test");   
//      document.getElementById("shopping-cart").innerHTML =`${newCart}`;  
  
// }

// function addToInputField() {
//     let newInput = inputField += 1; 
//     console.log( inputField  );
//     document.getElementById('card-input-CART').textContent =`${newInput}`;
    
// }

// function subtractFromInput() {
//     let newestCart = cartItems -= 1;
//     if (newestCart < 0 ){
//         newestcart === 0
//      };
//     document.getElementById("shopping-cart").innerHTML =`${newestCart}`;  
// }


//I am going to refactor all of the code above

let basket; 

let shoppingCart = {
     coupon: 'Invalid Code',
     total: 0 
}



  function popUp() {
     // URL of the content you want to display in the pop-up
     var url = 'https://accounts.google.com/';
 
     // Define the dimensions and other properties of the pop-up window
     var width = 400;
     var height = 300;
     var options = 'width=' + width + ',height=' + height + ',resizable=yes';
 
     // Open the pop-up window
     var popup = window.open(url, 'PopupWindow', options);
 
     // Focus the pop-up window (optional)
     if (popup) {
       popup.focus();
     }
   }
 
  

   // Add an event listener to the button to trigger the pop-up function
//    document.getElementById('popupButton').addEventListener('click', openPopup);

 


//add pop up for when the coupon submit button is pressed
// if input value.length > 1 enable pop-up
// else do nothing

//add function that accepts the value of the 

const shoes = [ 
  {
    shoe: "shoe1",
    url: "https://i.etsystatic.com/34279716/r/il/161b51/3709931678/il_1588xN.3709931678_mhwg.jpg",
  
  },
  {
    shoe: "shoe2",
    url: "https://i.etsystatic.com/34279716/r/il/168563/3709931644/il_1588xN.3709931644_imqf.jpg",
  },
  {
    shoe: "shoe3",
    url: "https://i.etsystatic.com/34279716/r/il/438275/3709931668/il_1588xN.3709931668_3ph1.jpg",
  },
  {
    shoe: "shoe4",
    url: "https://i.etsystatic.com/34279716/r/il/8ccc1c/3757516871/il_1588xN.3757516871_qq60.jpg",
  },
  ];
  
let iterate = 0;

console.log("debud"); 
let rightSlide = document.getElementById("slide-right"); 
let leftSlide = document.getElementById("slide-left"); 
let imageElement = document.getElementById("slider-image-center");

document.getElementById("slide-right").addEventListener('click', function(){
console.log("hello")
  iterate++
  console.log(iterate)
  if( iterate > 3){
   iterate = 0
  }
  // make the img src url eqaul to this value
   imageElement.src = shoes[iterate].url
   console.log(iterate)
});

document.getElementById("slide-left").addEventListener('click', function(){
  iterate--
  console.log(iterate)
  if(iterate < 0 ){
    iterate = 3 // replace with last index automatically shoes.length something something
  }
  imageElement.src = shoes[iterate].url
  console.log(iterate)
});

const hats = [ 
{
    hat: hat1,
    url: "",
  
},
{
    hat: hat2,
    url: "",
},
{
   hat: hat3,
   url: "",
},
{
  hat: hat4,
  url: "",
},
{
   hat: hat5,
   url: "",
},

];

const pants = [
  {  
     pantolones: pantalones1,
     url: "",

  },
  {
     pantalones: pantalones2, 
     url: "",
  }
];

const socks = [ 
  { 
     sock: sock1,
     url: "", 
  },
  {
    sock: sock2,
    url: "",
  },
  {
    sock: sock3,
    url: "",
    
  },
  {
    sock: sock4,
    url: "", 
  }
]; 