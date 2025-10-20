// Get references to the input text boxes //
const tbxNum1 = document.getElementById("tbxNum1");
const tbxNum2 = document.getElementById("tbxNum2");
const tbxNum3 = document.getElementById("tbxNum3");

// Get references to the output text boxes //
const txaResults = document.getElementById("txaResults");

function findLargestNumber() {
    let Num1 = Number(tbxNum1.value);
    let Num2 = Number(tbxNum2.value);
    let Num3 = Number(tbxNum3.value);
    
    if (Num1>Num2) {
     //true//

    }
    else {
        largest = Num2;
        //false//

    }

    if (largest<Num3) {

    }

    else {
        largest = Num2;
    }


    txaResults.value = "The largest number is: " + largest;
}