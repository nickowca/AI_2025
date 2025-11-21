// let arr = [
//     [1, 2, 3],
//     [11, 12, 22],
//     [123, 123, 123]
// ];

// console.log(arr);

//      5 x 3



let input = document.getElementById("input")
const button = document.getElementById("button")
let arr = [];
let sum;

function sumakolumn(lista) {
    const sumak = [];

    for (let j = 0; j < input.value; j++) {
        let sum = 0;
        for (let i = 0; i < input.value; i++) {
            sum += lista[i][j];
        }
        sumak.push(sum)
    }
    return sumak;
}

function sumawierszy(lista) {
    const sumaw = [];

    for (let i = 0; i < input.value; i++) {
        let sum = 0;
        for (let j = 0; j < input.value; j++) {
            sum += lista[i][j];
        }
        sumaw.push(sum)
    }
    return sumaw;
}

function sumaprzekatnej(lista) {
    let sum = 0

    for (let i = 0; i < input.value; i++) {
        sum += lista[i][i];
    }
    return sum;

}

function sumapodglownaprzekatna(lista) {
    let sum = 0;
    for (let i = 0; i < input.value; i++) {
        for (let j = 0; j < i; j++){
            sum += lista[i][j];
        }
    }
    return sum;
}

button.addEventListener("click", function () {
    for (let i = 0; i < input.value; i++) {
        arr.push([]);
        for (let j = 0; j < input.value; j++) {
            arr[i].push(Math.floor(Math.random() * 100));
        }
    }
    console.table(arr)
    console.log("sumy kolumn:", sumakolumn(arr))
    console.log("sumy wierszy:", sumawierszy(arr))
    console.log("suma przekatnej:", sumaprzekatnej(arr))
    console.log("suma elementow pod jedna przekatna:", sumapodglownaprzekatna(arr))
})






