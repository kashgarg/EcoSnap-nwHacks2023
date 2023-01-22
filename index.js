let sum = 0;
sum = +sum;
let stringId1;
let stringId2;
let stringId3;

function getResults(){
    for(let n = 1; n <= 6; n++){
        switch(n) {
            case 1:
                stringId1 = "meat_";
                break;
            case 2:
                stringId1 = "takeout_";
                break;
            case 3:
                stringId1 = "drive_";
                break;
            case 4:
                stringId1 = "fly_";
                break;
            case 5:
                stringId1 = "laundry_";
                break;
            case 6:
                stringId1 = "shower_";
                break;
        }
        for(let i = 1; i <= 5; i++){
            switch(i) {
                case 1:
                    stringId2 = "one";
                    break;
                case 2:
                    stringId2 = "two";
                    break;
                case 3:
                    stringId2 = "three";
                    break;
                case 4:
                    stringId2 = "four";
                    break;
                case 5:
                    stringId2 = "five";
                    break;
            }
            stringId3 = stringId1.concat(stringId2);
            let radioButton = document.getElementById(stringId3);
            let radButtonValue = document.getElementById(stringId3).value;
            radButtonValue = +radButtonValue;
            if(radioButton.checked){
                sum += radButtonValue;
            }
        }
    }
    console.log(sum);
}
