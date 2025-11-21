function doSth() {


    //this. - odnosi sie do konkretnego elementu

    this.style.setProperty("color", "red");

}

function dblclick_handler() {
    this.style.backgroundColor = "wheat"
    this.setAttribute("contenteditable", "true");
    this.style.fontSize = "30px"

}

function focusout_handler() {
    this.setAttribute("contenteditable", "false")
    this.style.backgroundColor = "aliceblue"

}

function rightClick() {
    event.preventDefault();
    alert("przywrocono rozmiar czcionki");
}

let test1 = document.getElementById("test1")
let fontSizeCurrent = window.getComputedStyle(test1).getPropertyValue("font-size");


let allDiv = document.querySelectorAll(".test");

for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].addEventListener("click", doSth);
    allDiv[i].style.setProperty("font-size", (Math.floor(Math.random() * 10) + 20) + "px");
    allDiv[i].addEventListener("dblclick", dblclick_handler);
    allDiv[i].addEventListener("focusout", focusout_handler)
    allDiv[i].addEventListener("contextmenu", rightClick)
    

    // allDiv[i].addEventListener("dblclick", function() { //() => {
    //     console.log(this)
    //     this.style.setProperty("background-color", "wheat")
    // })
    // allDiv[i].removeEventListener("click", doSth);
    // 
}