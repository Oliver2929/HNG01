"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPerfect = exports.isPrime = exports.sumOfDigits = exports.isArmstrong = void 0;
var isArmstrong = function (num) {
    var digits = num.toString().split("").map(Number);
    var sum = digits.reduce(function (acc, digit) { return acc + Math.pow(digit, digits.length); }, 0);
    return sum === num;
};
exports.isArmstrong = isArmstrong;
var sumOfDigits = function (num) {
    return Math.abs(num)
        .toString()
        .split("")
        .map(Number)
        .reduce(function (sum, digit) { return sum + digit; }, 0);
};
exports.sumOfDigits = sumOfDigits;
var isPrime = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
var isPerfect = function (num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0)
            sum += i;
    }
    return sum === num;
};
exports.isPerfect = isPerfect;
var result = (0, exports.sumOfDigits)(12345);
console.log(result);
