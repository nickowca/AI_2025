

function generujliste() {
    const title = document.getElementById("title").value
    const number = parseInt(document.getElementById("number").value)
    const colourEven = document.getElementById("colour1").value
    const colourOdd = document.getElementById("colour2").value
    const list = document.getElementById("list")

    list.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        const li = document.createElement("li");
        li.textContent = `${title}`;
        li.style.backgroundColor = (i % 2 === 0) ? colourEven : colourOdd;
        list.appendChild(li)
    }
}