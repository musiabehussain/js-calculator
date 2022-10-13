// const buttons = document.querySelectorAll("button");
// const screen = document.querySelector(".display");

// buttons.forEach(function (button) {
//   button.addEventListener("click", calculate);
// });

// function calculate(event) {
//   const clickbuttonvalue = event.target.value;
//   console.log(clickbuttonvalue);

//   if (clickbuttonvalue === "=") {
//     if (screen.value !== "") {
//       screen.value = eval(screen.value);
//     }
//   } else if (clickbuttonvalue === "c") {
//     screen.value = "";
//   } else {
//     screen.value += clickbuttonvalue;
//   }
// }



let buttons =  document.querySelectorAll('button')
let display  = document.querySelector('.display')

buttons.forEach(function(button){
    button.addEventListener("click", calculate)
})

function  calculate(event){
    const buttonclickValue = event.target.value

    if(buttonclickValue === "="){
        if(display.value !==""){
            display.value = eval(display.value)
        }
    }else if(buttonclickValue === ""){
        display.value = ""

    }else{
        display.value += buttonclickValue
    }
}