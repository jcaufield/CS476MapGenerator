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

      //grabbing a world value if it was random
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

      var arrNames = [];

      if(type == "world"){

        let worldNam = new WorldNames();
        worldNam.getReg(reg);
        worldNam.getNames();
        reg = worldNam.reg;
        
        for(var i=0;i<reg;i++)
        {
          arrNames[i] = worldNam.nameArr[i];

        }

      }
      else if(type == "country"){

        let countryNam = new CountryNames();
        countryNam.getReg(reg);
        countryNam.getNames();
        reg = countryNam.reg;

        for(var i=0;i<reg;i++)
        {
          arrNames[i] = countryNam.nameArr[i];

        }

      }
      else{

        let kingdomNam = new KingdomNames();
        kingdomNam.getReg(reg);
        kingdomNam.getNames();
        reg = kingdomNam.reg;

        for(var i=0;i<reg;i++)
        {
          arrNames[i] = kingdomNam.nameArr[i];

        }

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


      // turn seed into point values
    var points = [];

     // values need to send type, reg, water, arrNames and z (for xyvalues).
    var tempSeed = seed;
    var temp5;

     for(var i = 0; i < 500; i++)
     {
      points[i] = new xyVal();
      Math.seedrandom(tempSeed);
      temp5 = Math.random();
      points[i].addx(temp5);
      tempSeed++;
      Math.seedrandom(tempSeed);
      temp5 = Math.random();
      points[i].addy(temp5);
      tempSeed++;
     }


     renderWorld(points, water, arrNames);
 

    }



  });

const regButton = document.getElementById('Reg');
const bioButton = document.getElementById('Bio');
const svgAPI = new SVGAdapter('WorldCreated');
regButton.addEventListener('click', function() {
  const data = d3.range(150).map(() => ({
    x: Math.random(),
    y: Math.random()
  }));

  renderWorld(data, 3, ["TarryNot", "Devonsland", "JimJiminy", "404Land_Not_Found"]); // , "Atol" , "Xiphactinus"
});


  