const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {
    var ran = Math.floor(Math.random() * 1000000000)
    var type = document.getElementById('type1').selectedIndex;
    var reg = document.getElementById('Regional1').selectedIndex;
    var water = document.getElementById('water1').selectedIndex;
    output.innerText = ran + type + reg + water;

  });