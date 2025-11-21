const list = document.querySelector("#list")
const content = document.querySelector("#content")
const fname = document.querySelector("#fname")

list.addEventListener("click", function(){

    if(list.value == "jaslo")
    {
        content.innerHTML = "Nie dziękuję!";
    }
    else
    {

    content.innerHTML = list.value;
    }
})

fname.addEventListener("input", function(){

    if(fname.value == "rabbit")
    {
        content.innerHTML = "noooooo";
    }
    else
    {
        content.innerHTML = fname.value;
    }

})