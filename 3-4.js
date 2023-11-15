// Функція "modifyArray"
function modifyArray(inputArray) {
    inputArray.unshift("start");
    inputArray.pop();
    if (inputArray.length >= 2) {
        inputArray[1] = "modified";
    }
    return inputArray;
}

// Функція "arrayOperations"
function arrayOperations(inputArray) {
    inputArray.push("end");
    inputArray.shift();
    inputArray.splice(3, 0, "middle");
    return inputArray;
}

// Функція "checkInteger"
function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "Число ціле";
    } else {
        return "Число не ціле";
    }
}

// Приклади використання:
let myArray = [1, 2, 3, 4, 5];
console.log("Мій 1 масив:", myArray);
let modifiedArray = modifyArray(myArray);
console.log("Modified Array:", modifiedArray);
console.log("");
let anotherArray = [10, 20, 30, 40, 50];
console.log("Мій 2 масив:", anotherArray);
let newArray = arrayOperations(anotherArray);
console.log("Новий масив:", newArray);
console.log("");
let myNumber = 42.5;
let myNumber2 = 42;
console.log("Число:", myNumber);
let result = checkInteger(myNumber);
console.log("Результат:", result);
console.log("");
console.log("Число:", myNumber2);
let result2 = checkInteger(myNumber2);
console.log("Результат:", result2);
