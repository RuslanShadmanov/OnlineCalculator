const buttons = document.querySelectorAll(".button:not(.clear):not(.result)");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear")
const resultBtn = document.querySelector(".result")
let isReset = false;

clearBtn.addEventListener("click",()=>{
    display.innerText = "0";
})


buttons.forEach((button)=>{
   
    button.addEventListener('click',()=>{
        if(display.innerText==="0") {
            display.innerText = ""
        }
        if (isReset===true){
            display.innerText= "";
            isReset=false;
        }
            display.innerText += button.innerText;
        
    })
})

resultBtn.addEventListener('click',()=>{
    isReset= true;
    const value=display.innerText.replaceAll("x","*")
    display.innerText= eval(value)
})







