class GenerateName {
    constructor(){
    this.reg = 0;
    this.nameArr = [];
    this.ranNum1 = [];
    this.ranNum2 = [];

    }


// to take the string Regional from the html and produce the number to fill in reg variable.
     getReg(x){

        var tempReg = x;
        //tempReg = document.getElementById('Regional1').value;

        if(tempReg == "Random")
        {
            this.changeRandom(tempReg);
        }

        if(tempReg == "1"){
            this.reg = 1;
        }
        else if(tempReg == "2"){
            this.reg = 2;
        }
        else if(tempReg == "3"){
            this.reg = 3;
        }
        else if(tempReg == "4"){
            this.reg = 4;
        }
        else if(tempReg == "5"){
            this.reg = 5;
        }
        else {
            this.reg = 6;
        }

        
        


    }

// if the user chooses random for Regional then this will produce a random number between 1 - 6.
     changeRandom(){
        
            var x = (Math.random() * 100) % 6;
            this.reg = Math.round(x);
 
    }


    
}

 class WorldNames extends GenerateName {

    getNames(seed) {

        var x = this.reg;
        var temp;

        this.createRanNum(seed);

        for (var i = 0; i < x; i++){

            temp = countries[this.ranNum1[i]];
            this.nameArr[i] =  temp;


        }

        

    }

    // creating random numbers for reg names
    createRanNum(seed){

        var x = this.reg;
        var y = countries.length;
        var tempS = seed

        for (var i = 0; i < x; i++)
        {
            Math.seedrandom(tempS);
            this.ranNum1[i] = Math.floor((Math.random()*100) % y);
            tempS=tempS*2;
        }

        

        
    }


}

 class CounrtyNames extends GenerateName {

    getNames(seed) {

        var x = this.reg;
        var temp;

        this.createRanNum(seed);

        for (var i = 0; i < x; i++){

            temp = provinces[this.ranNum1[i]];
            this.nameArr[i] =  temp;
        }

        

    }

    // creating random numbers for reg names
    createRanNum(seed){

        var x = this.reg;
        var y = provinces.length;
        var tempS = seed;

        for (var i = 0; i < x; i++)
        {
            Math.seedrandom(tempS);
            this.ranNum1[i] = Math.floor((Math.random()*100) % y);
            tempS=tempS*2;
        }

        

        
    }
}




 class KingdomNames extends GenerateName {

    getNames(seed){

        var x = this.reg;
        var temp;

        this.createRanNum(seed);

        for (var i = 0; i < x; i++){

            temp = citiesPrefix[this.ranNum1[i]] + citiesSuffix[this.ranNum2[i]];
            this.nameArr[i] =  temp;
        }

        
    }

    // creating random numbers for reg names
    createRanNum(seed){

        // for prfix
        var x = this.reg;
        var y = citiesPrefix.length;
        var tempS = seed;

        for (var i = 0; i < x; i++)
        {
            Math.seedrandom(tempS);
            this.ranNum1[i] = Math.floor((Math.random()*100) % y);
            tempS=tempS*2;
        }

        // for suffix

        var x = this.reg;
        var y = citiesSuffix.length;
        var tempS = seed;

        for (var i = 0; i < x; i++)
        {
            Math.seedrandom(tempS);
            this.ranNum1[i] = Math.floor((Math.random()*100) % y);
            tempS=tempS*2;
        }

        
        
    }
        


 }
