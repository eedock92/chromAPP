const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const currentClass = title.className;
//   if(currentClass)
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if(!hasClass){
//     title.classList.remove(CLICKED_CLASS);
//   } else{
//     title.classList.add(CLICKED_CLASS);
//   }
// }


function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}


function init() {
  title.addEventListener("click", handleClick);
}
init();

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleCheck() {
//   const currentClass = title.className;
//   if(currentClass !== CLICKED_CLASS){
//     title.className = CLICKED_CLASS;
//   }else {
//     title.className = "";
//   }
// }

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// const BASE_COLOR = "#rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR){
//     title.style.color = OTHER_COLOR;
//   } else{
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }

// init();


// function handleOffline() {
//   console.log("Bye bye");
// }

// function handleOnline(){
//   console.log("Welcome back")
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);


// const title = document.getElementById("title");
// title.innerHTML = "Hi! From JS";
// title.style.color = 'red';
// document.title = "I own you now";

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if(currentColor === BASE_COLOR){
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE.COLOR;
//   }
//   console.log(title.style.color);
// }

// const age = prompt("How old are you");

// if( age >= 18 && age <= 21){
//   console.log("you can drink but you should not");
// }else if(age > 21){
//   console.log("go ahed");
// }else{
//   console.log("too yound")
// }

// console.log(age);


// if("apple" === "apple"){
//   console.log("hi");
// } else if("10" === "10"){
//   console.log("lalala");
// } else{
//   console.log("ho");
// }

// window.addEventListener("resize", handleResize);

// function handleResize(){
//   title.style.color = "red";
//   console.log();
// }

// function handleClick() {
//   if(title.style.color = " white")
//     title.style.color = "blue";
//   if(title.style.color = "blue")
//     title.style.color = "white";
// }

// window.addEventListener("click", handleClick);




// const byungSooInfo = {
//   name : "ByungSoo Kim",
//   age : 29,
//   gender: "Male",
//   isHansome: true,
//   favMovies: ["Along the gods", "LOTR", "Oldboy"],
//   favFood: [
//     {
//        name : "Kimchi",
//        fatty : false     
//     },
//     {name : "Cheese burger",
//        fatty: true
//     }
       
//   ]
// }



