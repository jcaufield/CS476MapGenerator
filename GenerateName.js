class GenerateName {
    constructor(){
    this.reg = 0;
    this.nameArr = [];


    }


// to take the string Regional from the html and produce the number to fill in reg variable.
     getReg(x){

        var tempReg = x;
        //tempReg = document.getElementById('Regional1').value;

        if(tempReg == "Random")
        {
            this.changeRandom(tempReg);
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

// if the user chooses random for Regional then this will produce a random number between 2 - 6.
     changeRandom(){
        
            var x = (Math.random() * 10000);
            x = Math.floor(x);
            x = (x % 5) + 2;
            if (x == 0)
            {
                x = 5;
            }
            this.reg = x;
 
    }

    grabNames(x,y,tempS,tempArr){
        var temp;
        var ranNum;
        for (var i = 0; i < x; i++){

            Math.seedrandom(tempS);
            ranNum = Math.floor((Math.random()*1000))% y;
            tempS=tempS*2;


            temp = tempArr[ranNum];
            this.nameArr[i] =  temp;

            
            tempArr[ranNum] = '';
            tempArr = tempArr.filter(name => name != '');
            y--;

        }
    }


    
}

 class WorldNames extends GenerateName {

    getNames(seed) {


        var y = countries.length;
        var tempArr = countries.slice();

  
        this.grabNames(this.reg,y,seed,tempArr);
        
        

    }



}

 class CountryNames extends GenerateName {

    getNames(seed) {


        var y = provinces.length;
        var tempArr = provinces.slice();

    

        this.grabNames(this.reg,y,seed,tempArr);
    }
 
}




 class KingdomNames extends GenerateName {

    getNames(seed){
        var x = this.reg;
        var y1 = citiesPrefix.length;
        var y2 = citiesSuffix.length;
        var temp;
        var tempS = seed;
        var ranNum1;
        var ranNum2;
        var tempArr1 = citiesPrefix.slice();
        var tempArr2 = citiesSuffix.slice();


        for (var i = 0; i < x; i++){

            Math.seedrandom(tempS);
            ranNum1 = Math.floor((Math.random()*1000)) % y1;
            tempS=tempS*2;

            Math.seedrandom(tempS);
            ranNum2 = Math.floor((Math.random()*1000)) % y2;
            tempS=tempS*2;


            temp = tempArr1[ranNum1] + tempArr2[ranNum2];
            this.nameArr[i] =  temp;

            
            tempArr1[ranNum1] = '';
            tempArr1 = tempArr1.filter(name => name != '');
            y1--;
            

            tempArr2[ranNum2] = '';
            tempArr2 = tempArr2.filter(name => name != '');
            y2--;

        }

        
    }

 


 }
