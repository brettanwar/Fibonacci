

function fibonacci() {
    var fib1 = 1;
    var fib2 = 1;
    console.log("1: " + fib1);
    console.log("2: " + fib2);
    for (let i=2; i<10; i++){
        var sum = fib1 + fib2;
        console.log(i + ": " + sum);
        fib1 = fib2;
        fib2 = sum;
    }
}

fibonacci();