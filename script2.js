function main() {
    let largestNumber;
    let x;

    for (x = 0; x <= 2; x++) {
        window.alert("Enter " + x + 1 + "number of 3");
        let number;

        number = Number(window.prompt('Enter a value for number'));
        if (x == 0) {
            largestNumber = number;
        } else {
            if (number > largestNumber) {
                largestNumber = number;
            }
        }
    }
    window.alert("Largest number is: " + largestNumber);
}

//This is from Flowgorithm//