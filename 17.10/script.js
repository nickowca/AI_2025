const clicker = document.querySelector("#clicker");
const content = document.querySelector("#content");

let content_width = 100;
let content_height = 100;

clicker.addEventListener("click", function(){
    // content.style.width = "200px";
    // content.style.backgroundColor = "red";
    content.style.setProperty("background-color", "pink");
    content_height += 10;
    content_width +=10;

    content.style.setProperty("height", content_height + "px");
    content.style.setProperty("width", content_width + "px");
});

content.addEventListener("click", function(){
    content_width = 100;
    content_height = 100;

    content.style.setProperty("height", content_height + "px");
    content.style.setProperty("width", content_width + "px");
    content.style.setProperty("background-color", "white");

});
