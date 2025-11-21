// let fname_input = document.getElementById("fname");
// let button_showme = document.getElementById("showme");
// let content = document.getElementById("content");

// function dosth()
// {
//     content.innerHTML = "<p>jello</p>";
// }

let cinput = document.querySelector("#cinput");
let button = document.querySelector("#showme");
let content = document.querySelector("#calc");

// listener

// button.addEventListener("click", function(){

//     content.innerHTML += "hello there" + fname.value;
//         // "123"
//     let num = parseInt(fname.value); // parse do liczby
//         // 123
//     let num2 = fname.value * 1;
// });


button.addEventListener("click", function(){
    
    let num = parseInt(cinput.value);

    for(let i <= num; i <= num; i++)
    {
        calc.innerHTML += i + "<br>";
    }

    for(let i = 0; i <= num; i++)
    {
        
    }

});
