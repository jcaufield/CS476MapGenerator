const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {
    var ran = Math.floor(Math.random() * 1000000000)
    output.innerText = ran;
  });