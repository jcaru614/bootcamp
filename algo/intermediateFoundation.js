// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
    var counter = 0;
    for (let i = 0; i <= num; i++) {
        counter = counter + i;
    }
    return counter;
}
sigma(3)

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num) {
    var multiplyCounter = 1;
    for (let i = 1; i <= num; i++) {
        multiplyCounter = multiplyCounter * i;
    }
    return multiplyCounter;
}
factorial(3);


// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secToLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length - 2]
    }
}
secToLast([1, 2, 3, 'joey', 5])

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr,n) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length-n];
    }
}
nthToLast([1,2,3,4,5],3)

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) {
    var largest = arr[0];
    var second = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > second && arr[i] < largest) {
            second = arr[i];
        }
    }
    return second;
}
secondLargest([2,4,6,8]);

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.splice(arr[i]+1,0,arr[i]);
        i++;
    }
    return newArr;
}
doubleTrouble([1,2,3,4,5])

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4)

function fibonacciGenerator(n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            newArr.push(i);
        } else {
            var num = newArr[i - 1] + newArr[i - 2];
            newArr.push(num);
        }
    }
    return newArr;
}
fibonacciGenerator(4)