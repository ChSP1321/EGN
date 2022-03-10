function solve(input){
let egnLength = input.length;
let egnArr = [];
let numFormula = 0;

for(i = 0; i < egnLength; i++){
    let num = input.substring(i, i + 1);
    egnArr.push(num);
    num = Number(num);
    switch(i){
        case 0:
            numFormula += (egnArr[i] * 2);
            break;
            case 1:
            numFormula += (egnArr[i] * 4);
            break;
            case 2:
            numFormula += (egnArr[i] * 8);
            break;
            case 3:
            numFormula += (egnArr[i] * 5);
            break;
            case 4:
            numFormula += (egnArr[i] * 10);
            break;
            case 5:
            numFormula += (egnArr[i] * 9);
            break;
            case 6:
            numFormula += (egnArr[i] * 7);
            break;
            case 7:
            numFormula += (egnArr[i] * 3);
            break;
            case 8:
            numFormula += (egnArr[i] * 6);
            break;
    }
    num = 0;
}
 let newNumFormulaFirst = (numFormula / 11) + "";
 let newNumFormulaSecond = (Number(newNumFormulaFirst.slice(3, 5)) % 100) + "";
 let newNumFormula = Math.round(newNumFormulaSecond / 10);
 let lastNum = Number(input.slice(egnArr.length - 1));
 let gender = (Number(egnArr[8])) % 2;

if ((egnLength === 10) && (newNumFormula === lastNum)){
    let bornYear = Number(input.slice(2, 3));
    let month = Number(input.slice(2, 4));
    let day = Number(input.slice(4, 6));

    if((bornYear >= 4) && (bornYear <= 5)){
        if(((month >= 41) && (month <= 49)) && ((day >= 1) && (day <= 31))){
            console.log("TRUE");
            console.log(`20${egnArr[0]}${egnArr[1]}-0${egnArr[3]}-${egnArr[4]}${egnArr[5]}`);
            if(gender != 0){
                console.log("F");
            }else{
                console.log("M");
            }
            
        }else if (((month >= 50) && (month <= 52)) && ((day >= 1) && (day <= 31))){
            console.log("TRUE");
            console.log(`20${egnArr[0]}${egnArr[1]}-1${egnArr[3]}-${egnArr[4]}${egnArr[5]}`);
            if(gender != 0){
                console.log("F");
            }else{
                console.log("M");
            }
        }else{
            console.log("FALSE");
        }
    }else if((bornYear >= 2) && (bornYear <= 3)){
        if(((month >= 21) && (month <= 29)) && ((day >= 1) && (day <= 31))){
            console.log("TRUE");
            console.log(`18${egnArr[0]}${egnArr[1]}-0${egnArr[3]}-${egnArr[4]}${egnArr[5]}`);
            if(gender != 0){
                console.log("F");
            }else{
                console.log("M");
            }
        }else if (((month >= 30) && (month <= 32)) && ((day >= 1) && (day <= 31))){
            console.log("TRUE");
            console.log(`18${egnArr[0]}${egnArr[1]}-1${egnArr[3]}-${egnArr[4]}${egnArr[5]}`);
            if(gender != 0){
                console.log("F");
            }else{
                console.log("M");
            }
        }else{
            console.log("FALSE");
        }
    }else{
        if(((month >= 1) && (month <= 12)) && ((day >= 1) && (day <= 31))){
            console.log("TRUE");
            console.log(`19${egnArr[0]}${egnArr[1]}-${egnArr[2]}${egnArr[3]}-${egnArr[4]}${egnArr[5]} `);
            if(gender != 0){
                console.log("F");
            }else{
                console.log("M");
            }
        }else{
            console.log("FALSE");
        }
        
    }
}else{
    console.log("FALSE");
}
}

solve ("0347059192");