const show = document.getElementById("show")
const lock = document.getElementById("lock")
const width = document.getElementById("width")
const height = document.getElementById("height")
const content = document.getElementById("content")
const text = document.getElementById("text")

function display() {

    if (show.checked == true) {
        content.style.display = "block";
        text.innerHTML = "Jest!"
    } else {
        content.style.display = "none";
        text.innerHTML = "Nie jest?"

    }
}




width.addEventListener("change", function(){
    if (lock.checked == true){
        height.value = width.value
    } 
    content.style.setProperty("width", width.value + "px");
    content.style.setProperty("height", height.value + "px");
})

height.addEventListener("change", function(){
    if (lock.checked == true){
        width.value = height.value
    } 
    content.style.setProperty("height", height.value + "px");
    content.style.setProperty("width", width.value + "px");

})
