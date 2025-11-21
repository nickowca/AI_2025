let points = document.querySelectorAll("li")
let paragraphs = document.querySelectorAll(".toedit")
let oryginalnaTresc = []
let button = document.querySelector("#button")

console.log(`ilosc elementow listy: ${points.length}`)

for (let i = 0; i < points.length; i++) {
    if(i % 2 === 1) {
        points[i].style.backgroundColor = "lightgrey";
    }
}

for (let i = 0; i < paragraphs.length; i++) {
    oryginalnaTresc.push(paragraphs[i].textContent);
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `zmieniono tresc paragrafu nr ${i}`
}

button.addEventListener('click', function(){
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = oryginalnaTresc[i]
    }
});