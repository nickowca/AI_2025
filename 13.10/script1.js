const button = document.querySelector("#button")
const div1 = document.querySelector("#div1")
const scroll = document.querySelector("#scroll")
const number = document.querySelector("#number")
const liczba = document.querySelector("#liczba")
const wynik = document.querySelector("#wynik")
const poka = document.querySelector("#poka")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const sum = document.querySelector("#sum")
const result = document.querySelector("#result")



button.addEventListener("click", function(){
    div1.innerHTML = "<h1>Witaj świecie!</h1>";

})

scroll.addEventListener("input", function(){
    number.innerHTML = scroll.value;
})

poka.addEventListener("click", function(){
    wynik.innerHTML =  "<h1>" + liczba.value + "</h1>";
})

sum.addEventListener("click", function(){
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
})



