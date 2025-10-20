// Get references to the input text boxes //
const tbxNum1 = document.getElementById("tbxNum1");
const tbxNum2 = document.getElementById("tbxNum2");
const tbxNum3 = document.getElementById("tbxNum3");

// Get reference to the output element //
const resultDiv = document.getElementById("result");

function findLargestNumber() {
    let Num1 = Number(tbxNum1.value);
    let Num2 = Number(tbxNum2.value);
    let Num3 = Number(tbxNum3.value);
    
    let largest;
    
    if (Num1 > Num2) {
        largest = Num1;
    }
    else {
        largest = Num2;
    }

    if (largest < Num3) {
        largest = Num3;
    }

    resultDiv.textContent = "The largest number is: " + largest;
    resultDiv.style.display = "block";
}