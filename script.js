// Get references to the input text boxes //
const tbxNum1 = document.getElementById("tbxNum1");
const tbxNum2 = document.getElementById("tbxNum2");
const tbxNum3 = document.getElementById("tbxNum3");

// Get references to the output text boxes //
const txaResults = document.getElementById("txaResults");

function findLargestNumber() {
    let tbxNum1 = tbxNum1.value;
    let tbxNum2 = tbxNum2.value;
    let tbxNum3 = tbxNum3.value;
    txaResults.value = tbxNum1 + tbxNum2 + tbxNum3;


}