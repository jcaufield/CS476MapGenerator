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
        var y = countries.length;
        var temp;
        var tempS = seed;
        var ranNum;
        let tempArr = countries;

  

        for (var i = 0; i < x; i++){

            Math.seedrandom(tempS);
            ranNum = Math.floor((Math.random()*1000) % y);
            tempS=tempS*2;


            temp = tempArr[ranNum];
            this.nameArr[i] =  temp;

            
            tempArr[ranNum] = '';
            tempArr = tempArr.filter(tempArr => tempArr != '');
            y--;

        }

        

    }



}

 class CounrtyNames extends GenerateName {

    getNames(seed) {

        var x = this.reg;
        var y = provinces.length;
        var temp;
        var tempS = seed;
        var ranNum;
        let tempArr = provinces;

    

        for (var i = 0; i < x; i++){

            Math.seedrandom(tempS);
            ranNum = Math.floor((Math.random()*1000) % y);
            tempS=tempS*2;


            temp = tempArr[ranNum];
            this.nameArr[i] = temp;

            
            tempArr[ranNum] = '';
            tempArr = tempArr.filter(tempArr => tempArr != '');
            y--;

        }

        

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
        let tempArr1 = citiesPrefix;
        let tempArr2 = citiesSuffix;


        for (var i = 0; i < x; i++){

            Math.seedrandom(tempS);
            ranNum1 = Math.floor((Math.random()*1000) % y1);
            tempS=tempS*2;

            Math.seedrandom(tempS);
            ranNum2 = Math.floor((Math.random()*1000) % y2);
            tempS=tempS*2;


            temp = tempArr1[ranNum1] + tempArr2[ranNum2];
            this.nameArr[i] =  temp;

            
            tempArr1[ranNum1] = '';
            tempArr1 = tempArr1.filter(tempArr1 => tempArr1 != '');
            y1--;
            

            tempArr2[ranNum2] = '';
            tempArr2 = tempArr2.filter(tempArr2 => tempArr2 != '');
            y2--;

        }

        
    }

 


 }
