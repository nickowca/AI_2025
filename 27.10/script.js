let arr = [];
let cars = ["fiat", "ford", "polonez"];
const content = document.querySelector(".content");
let amount = document.getElementById("amount")
let max = document.getElementById("max")
let button = document.getElementById("button")
const output = document.getElementById("output")

let random_number = Math.random();

// let arr = new Array();

cars.push("mazda")
cars.push("peugeot")




arr.push(random_number)

button.addEventListener("click", function () {
    for (let i = 0; i < amount.value; i++) {
        random_number = Math.floor(random_number * max.value);
        
        arr.push(random_number)
        output.innerHTML += `<div>${arr[i]}</div>` 
        arr.forEach( num => {
            sum += num;
          })
          
          output.innerHTML += `<div>${sum}</div>` 
    }
})

let sum




for (let i = 0; i < cars.length; i++) {
    content.innerHTML += `<div>${cars[i]}</div>`;
}

