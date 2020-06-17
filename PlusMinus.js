//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
    let sumPos = 0
    let sumNeg = 0
    let sumZero = 0
    let x
    let y
    let z
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumPos += 1
        }
        if (arr[i] < 0) {
            sumNeg += 1
        }
        if (arr[i] == 0) {
            sumZero += 1
        }
        x = sumPos / arr.length
        y = sumNeg / arr.length
        z = sumZero / arr.length
    }
    console.log(x)
    console.log(y)
    console.log(z)
}