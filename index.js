const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {
  let start = new Date().getTime();

  // getting the values from html and checking if the user entered a seed number.
    var seed = document.getElementById('Seed').value;
    output.innerText = "";
   
  // checking if type of map is world, country, kingdom or random, if random pick one of the three
    var type = document.getElementById('type1').value
    var reg = document.getElementById('Regional1').value
    var water = document.getElementById('water1').value
    var arrNames = []

var dig1 = Math.floor(seed / 100000000);
var dig2 = Math.floor(seed / 10000000)%10;
var dig3 = Math.floor(seed / 1000000)%100%10;

// checking the seed
if(seed.toString().length == 9 && !seed.toString().includes('e') && dig1 < 4 && dig1 > 0 && dig2 < 7 && dig2 > 1 && dig3 < 5){

  seed = parseInt(seed);

  type = dig1;
  reg = dig2;
  water = dig3;

  if(type == 1){
    let worldNam = new WorldNames();
    worldNam.getReg(reg.toString());
    worldNam.getNames(seed);
    for(var i=0;i<reg;i++)
      {
        arrNames[i] = worldNam.nameArr[i];

      }
  }
  else if(type == 2){
    let countryNam = new CountryNames();
    countryNam.getReg(reg.toString());
    countryNam.getNames(seed);
    for(var i=0;i<reg;i++)
      {
        arrNames[i] = countryNam.nameArr[i];

      }
  }
  else{
    let kingdomNam = new KingdomNames();
    kingdomNam.getReg(reg.toString());
    kingdomNam.getNames(seed);
    for(var i=0;i<reg;i++)
      {
        arrNames[i] = kingdomNam.nameArr[i];

      }
  }
}
else if(seed == null || seed == ""){
// creates the six digit 
      var ts;
    
      ts = Math.random();

      if(ts < 0.1)
      {
        ts = ts + 0.1;
      }
        
      ts = ts * 1000000;
      ts = Math.floor(ts);
      seed = ts;

//grabbing a world value if it was random
      if(type == "kingdom"){
         type = 3;
      }

      else if(type == "world"){

        type = 1;
      }  
      else if(type == "country"){

        type = 2;
      }
      else{
        var x = Math.random();
        x = x * 100;
        x = Math.floor(x);
        type = (x % 3) + 1;
        if(type == 0){type = 1;}
      }

 //turning water into number value
      if(water== "alot"){
        water = 3;
      }

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
        var x = Math.random();
        x = x * 100;
        x = Math.floor(x);
        water = x % 4;
        
      }
    // create the reg and generate names
      if(type == 1){
        let worldNam = new WorldNames();
        worldNam.getReg(reg);
        reg = worldNam.reg;
      }
      else if(type == 2){
        let countryNam = new CountryNames();
        countryNam.getReg(reg);
        reg = countryNam.reg;
      }
      else{
        let kingdomNam = new KingdomNames();
        kingdomNam.getReg(reg);
        reg = kingdomNam.reg;
      }



    //combining to create nine digit key
      var tempT, tempR, tempW;
      tempT = type * 100000000;
      tempR = reg * 10000000;
      tempW = water *1000000;

      seed = seed + tempT + tempR + tempW;

    //generate the names
      if(type == 1){
        let worldNam = new WorldNames();
        worldNam.getReg(reg.toString());
        worldNam.getNames(seed);
        for(var i=0;i<reg;i++)
        {
          arrNames[i] = worldNam.nameArr[i];
        }
      }
      else if(type ==2){
        let countryNam = new CountryNames();
        countryNam.getReg(reg.toString());
        countryNam.getNames(seed);
        for(var i=0;i<reg;i++)
        {
          arrNames[i] = countryNam.nameArr[i];
        }
      }
      else{
        let kingdomNam = new KingdomNames();
        kingdomNam.getReg(reg.toString());
        kingdomNam.getNames(seed);
        for(var i=0;i<reg;i++)
        {
          arrNames[i] = kingdomNam.nameArr[i];
        }
      }


  }
  else{

      output.innerText ="The seed you entered is incorrect, can only be a 9 digit number. make sure the first digit canonly be 1-3 and the second digit can only be 2-6 and the third digit needs to be between 0-4";
      return;
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
 
  output.innerText= "This World's seed is: " + seed;

  //console.log("Time taken: ", new Date() - start, "ms");
});


  