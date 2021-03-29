const biggerThanHundred = function(number) {
    if (number > 100) {
        return true;
    } else if (number <= 100) {
        return false;
    };
    return "not a number";
};

console.log(biggerThanHundred(101));
console.log(biggerThanHundred(99));
console.log(biggerThanHundred("aardappel"));

const bigBrenda = function(maxPeople, currentPeople, age) {
    if (age < 18) {
        return "this is a club for adults";
    };
    if (currentPeople >= maxPeople) {
        return "it's too busy now, come back later";
    };
    return "come in";
};

console.log(bigBrenda(99, 100, 101));
console.log(bigBrenda(101, 100, 99));
console.log(bigBrenda(100, 100, 17));

const averageOfFiveNumbers = function(nr1, nr2, nr3, nr4, nr5) {
    return (nr1 + nr2 + nr3 + nr4 + nr5) / 5;
};

console.log(averageOfFiveNumbers(1, 2, 3, 4, 5));
console.log(averageOfFiveNumbers(1, 1, 1, 1, 3));

const roundedAverageOfFiveNumbers = function(nr1, nr2, nr3, nr4, nr5) {
    return Math.round((nr1 + nr2 + nr3 + nr4 + nr5) / 5);
};

console.log(roundedAverageOfFiveNumbers(1, 2, 3, 4, 5));
console.log(roundedAverageOfFiveNumbers(1, 1, 1, 1, 3));
