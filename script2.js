function main() {
    let largestNumber;
    let x;

    for (x = 0; x <= 2; x++) {
        window.alert("Enter " + x + 1 + "number of 3");
        var number;

        number = Number(window.prompt('Enter a value for number'));
        if (x == 0) {
            largesttNumber = number;
        } else {
            if (number > largestNumber) {
                largestNumber = number;
            }
        }
    }
    window.alert("Largest number is: " + largestNumber);
}