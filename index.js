const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {
    var ran = Math.floor(Math.random() * 1000000000)
    var type = document.getElementById('type1').value
    var reg = document.getElementById('Regional1').value
    var water = document.getElementById('water1').value
    output.innerText = ran + " " + type + " " + reg + " " + water;

  });