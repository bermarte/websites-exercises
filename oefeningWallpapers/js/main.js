/*
https://stackoverflow.com/questions/21032481/change-the-style-of-before-and-after-pseudo-elements
*/
let myButton = document.querySelector('#newsbutton');
let myMenu = document.querySelector('#newsletter');
let styleElem = document.head.appendChild(document.createElement("style"));
myButton.innerHTML = "Newsletter";
myButton.addEventListener("click", openClose);

function openClose() {
    if (this.innerHTML == "Newsletter") {
        this.innerHTML = "X";
        myMenu.style.left = "0px";
        myButton.style.width = "60px";
        styleElem.innerHTML = "#newsbutton::before {width: 28px;}";
        
    } else {
        myMenu.style.left = "-231px";
        myButton.style.width = "132px";
        styleElem.innerHTML = "#newsbutton::before {width: 100x;}";
        this.innerHTML = "Newsletter";
    }
}