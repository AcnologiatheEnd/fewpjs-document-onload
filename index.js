document.addEventListener('DOMContentLoaded', function(){
  update();
});

function update() {
    const element = document.getElementById("text");
    element.textContent = "This is really cool!";
}