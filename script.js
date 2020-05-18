const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// Print out an array of the inventors whose name starts with 'A'.

let newArray1 = inventors.filter(name => name.includes("A"));

// console.log("Whose name starts with A", newArray1);
console.log("Whose name starts with A", inventors.filter(i => i[0] === "A"));

// Print out an array of the inventors whose name contains 'n'.

let newArray2 = inventors.filter(name => name.includes("n"));

console.log("Whose name contains n", newArray2);

// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

let newArray3 = inventors.filter(name => {
    for (let i = 0; i < name.length - 1; i++) {
        if (name[i] === name[i + 1]) {
            return true;
        }
    }
});
console.log("The inventors whose name has the same letter twice in a row", newArray3);

// Print out an array of the numbers which are odd.

let isOdd = numbers.filter(num => num % 2 === 1);
console.log("The numbers which are odd", isOdd);

// Print out an array of the numbers that have two digits.

let findDigits = numbers.filter(num => {
    // if ((num / 10) === 1) {
    //     return true;
    // }

    if (10 <= num && num <= 99) return true;
});

console.log("The numbers that have two digits", findDigits);

// Print out an array of the numbers which are prime.

let findPrime = numbers.filter(num => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return num;
    }
});

console.log("The numbers which are prime", findPrime);

// Print out the first name of each inventor.

let newArray4 = inventors.map(name => {
    let firstName = name.split(" ");
    return firstName[0];
});

console.log("The first name of inventor", newArray4);
console.log("The first name of inventor", inventors.map(i => i.split(" ")[0]));

// Print out the length of every inventor's full name.

let newArray5 = inventors.map(name => {
    let fullName = name.split("");
    return fullName.length;
});

console.log("The length of every inventor's full name", newArray5);
console.log("The length of every inventor's full name", inventors.map(i => i.replace(" ", "").length));

// Print out all the inventors' names in uppercase.

let newArray6 = inventors.map(name => name.toUpperCase());

console.log("All the inventors' names in uppercase", newArray6);

// Print out initials of all inventors(e.g. A.E., I.N., ...)

console.log("Initials of all inventors",
    inventors.map(name => {
        let array = [name[0]];
        for (let i = 0; i < name.length; i++) {
            if (name[i] === " ") {
                array.push(name[i + 1]);
            }

        }
        return array.join(".");
    })
);

console.log(inventors.map(inventor => {
    let result = "";
    let splitArr = inventor.split(" ");
    for (let i = 0; i < splitArr.length; i++) {
        result += splitArr[i][0] + ".";
    }
    return result;
}));
// Print out an array of every number multiplied by 100.

let newArray8 = numbers.map(num => num * 100);

console.log("An array of every number multiplied by 100", newArray8);

// Sort all the inventors in alphabetical order, A-Z.

console.log("Sort all the inventors in alphabetical order A-Z", inventors.sort());

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.

console.log("Sort all the inventors in alphabetical order Z-A", inventors.sort((a, b) => a > b ? -1 : 1));

console.log(inventors.sort().map((i, index, arr) => arr[arr.length - 1 - index]));

// Sort all the inventors by length of name, shortest name first.

console.log(inventors.sort((a, b) => a.length > b.length ? 1 : -1));

// Sort all the inventors by length of name, longest name first. Do not use the reverse method.

console.log(inventors.sort((a, b) => a.length > b.length ? -1 : 1));

// Find the sum of all the numbers.

console.log(numbers.reduce((preVal, n) => preVal + n, 0));

// Find the sum of all the even numbers.

console.log(numbers.reduce((preVal, n) => {
    if (n % 2 === 0) return preVal + n;
    return preVal;
}, 0));

// Create a string that has the first name of every inventor.

console.log(inventors.reduce((preVal, i) => {
    return preVal + " " + i.split(" ")[0];
}, ""));

// Does any inventor have the letter 'y' in their name?

console.log(inventors.some(name => name.includes("y")));

// Does every inventor have the letter 'e' in their name?

console.log(inventors.every(name => name.includes("e")));

// Does every inventor have first name that's longer than 4 characters?

console.log(inventors.every(name => name.split(" ")[0].length > 4));

// Find the inventor that has a middle name.

console.log(inventors.find(name => name.split(" ").length > 2));

// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. 
// But you may also use another of the methods you've learned about above.)

console.log(inventors.findIndex(name => name.split(" ").length > 2));
console.log(inventors.filter(name => name.split(" ").length < 3));

// Find the number divisible by 7.

console.log(numbers.find(num => num % 7 === 0));

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.

console.log(numbers.filter(num => num % 7 !== 0));

// Rocket

function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(14));