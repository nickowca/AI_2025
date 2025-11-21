let content = document.querySelector(".content"); // jeden element
let divs = content.querySelectorAll("div"); // kolekcja = tablica

for (let i = 0; i < divs.length; i++) {
    divs[i].style.setProperty("width", "200px")
    divs[i].style.setProperty("height", "100px")
    divs[i].style.setProperty("border", "1px solid black")
    divs[i].addEventListener("click", function(){
        let counter = divs[i].getAttribute("data-counter");
        counter = parseInt(counter);
        counter += 1;
        divs[i].setAttribute("data-counter", counter)
        divs[i].innerHTML += "klikniety <br>"
    })
}