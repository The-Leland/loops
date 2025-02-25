

//problem 1.

function countTwos() {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i);
    }
}

countByTwos();


//problem 2.


function removeIndex(array, indices) {
    let result = [];
    for (let i = 0; i < indices.length; i++) {
        result.push(array[indices[i]]);
    }
    return result;
}

let letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let numberIndices = [1, 5]; 
console.log(removeByIndex(sampleArray, indices));


//problem 3.

function numToArray(number) {
    let numArray = [];
    let numStr = number.toString();
    for (let i = 0; i < numStr.length; i++) {
        numArray.push(parseInt(numStr[i])); 
    }
    return numArray;
}

console.log(numToArray(12345)); 


//problem 4.

function combineMatrix(arrayOne, arrayTwo) {
    let result = [];

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            result.push([arrayOne[i], arrayTwo[j]]);
            result.push([arrayTwo[j], arrayOne[i]]);
        }
    }

    return result;
}

let arrayOne = [1, 2, 3];
let arrayTwo = ["a", "b", "c", "d"];

console.log(createMatrix(arrayOne, arrayTwo));









