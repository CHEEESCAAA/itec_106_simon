function getNumberOfTerms() {
    let numTerms;
    do {
        numTerms = parseInt(prompt("Enter the number of terms in the Fibonacci sequence (less than 100):"));
    } while (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100);
    return numTerms;
}

function generateFibonacci(numTerms) {
    let fibonacciSequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < numTerms; i++) {
        fibonacciSequence.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    return fibonacciSequence;
}

function printSequence(sequence) {
    console.log("Fibonacci sequence:");
    sequence.forEach(num => console.log(num));
}

function main() {
    const numTerms = getNumberOfTerms();
    const fibonacciSequence = generateFibonacci(numTerms);
    printSequence(fibonacciSequence);
}

main();
