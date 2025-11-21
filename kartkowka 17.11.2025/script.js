let grid = []

function colourEven() {
    const colour = document.getElementById("colour").value;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            if (grid[i][j] % 2 === 0) {
                cell.style.background = colour;
                cell.style.color = "white";
            } else {
                cell.style.background = "white";
                cell.style.color = "black";
            }
        }
    }
}

document.getElementById("colour").addEventListener("input", colourEven);

function calculate(){
    const divisor = parseInt(document.getElementById("divisor").value);
    const mode = document.querySelector('input[name="mode"]:checked').value;

    let sumDiv = 0;
    let sumEven = 0;
    let sumAll = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++) {
            const v = grid[i][j];
            sumAll += v;
            if (v % divisor === 0) sumDiv += v;
            if (v % 2 === 0) sumEven += v;

        }
    }

    if(mode === "all") sumDiv = sumAll;

    const diff = sumDiv - sumEven;
    document.getElementById("result").innerHTML =
    `Suma podzielnych przez ${divisor}: ${sumDiv} <br>` +
    `Suma parzystych: ${sumEven}<br>` +
    `Różnica: <b>${diff}</b>`;
}

function generate() {
    const bok1 = parseInt(document.querySelector("#x").value);
    const bok2 = parseInt(document.querySelector("#y").value);
    const min = parseInt(document.querySelector("#min").value);
    const max = parseInt(document.querySelector("#max").value);

    grid = []
    let html = "<table border='1'>"

    for(let i = 0; i < bok1; i++){
        html += "<tr>";
        grid[i] = [];
        for(let j = 0; j < bok2; j++){
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            grid[i][j] = num;
            html += `<td id = "cell-${i}-${j}">${num}</td>`;

        }
        html += "</tr>";
    }
    html += "</table>"

    document.getElementById("table").innerHTML = html;
}