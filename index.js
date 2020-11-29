const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {

  // getting the values from html and checking if the user entered a seed number.
    var seed = document.getElementById('Seed').value;


    if(seed == null || seed == ""){
    
        seed = Math.round(Math.floor(Math.random() * 1000000000))

    }

    if(seed.toString().length > 9 || seed.toString().length < 9){

      output.innerText ="The seed you entered is incorrect, can only be a 9 digit number.";

    }

    else{
      // checking if type of map is world, country, kingdom or random, if random pick one of the three
      var type = document.getElementById('type1').value
      var reg = document.getElementById('Regional1').value
      var water = document.getElementById('water1').value

      if(type == "Random"){
        var x = Math.random() % 3;
        x = Math.random(x);
        if(type == 1){
          type = "world";
        }
        else if(x==2){
          type = "country";
        }
        else{
          type = "kingdom";
        }
      }

      //calling class for the generated names
      if(type == "world"){

        let worldNam = new WorldNames();
        worldNam.getReg(reg);
        worldNam.getNames();
        reg = worldNam.reg;

      }
      else if(type == "country"){

        let countryNam = new CountryNames();
        countryNam.getReg(reg);
        countryNam.getNames();
        reg = countryNam.reg;

      }
      else{

        let kingdomNam = new KingdomNames();
        kingdomNam.getReg(reg);
        kingdomNam.getNames();
        reg = kingdomNam.reg;

      }

      // turning the type into numbers value
      if(type == "world"){

        type = 1;
      }
      else if(type == "country"){

        type = 2;
      }
      else{
        type = 3;
      }

      //turning water into number value
      if(water == "none"){

        water = 0;
      }
      else if(water == "alittle"){

        water = 1;
      }
      else if(water == "moderate") {
        water = 2;
      }
      else{
        water = 3;
      }

      output.innerText = seed + " " + type + " " + reg + " " + water;

    }

  });

const regButton = document.getElementById('Reg');
let svgAPI = new SVGAdapter('WorldCreated');
regButton.addEventListener('click', function() {
  //voronoiExample();
  svgAPI.cover('red');
});


  