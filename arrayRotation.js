/**
 * Given an array rotate the array to the right by k steps where k is 
 * non-negative
 * input numbers = [1,2,3,4,5,6,7] k=3,
 * output if k=1 numbers =[7,1,2,3,4,5,6]
 * output if k=2 numbers =[6,7,1,2,3,4,5]
 * output if k=3 numbers =[5,6,7,1,2,3,4,]
 */

function rotateArray(numArray,numOfShift){

    for (let i=0;i<numOfShift;i++){
        numArray.unshift(numArray.pop())
        console.log(`step ${i+1}`,numArray);
    }
return numArray

}

console.log(rotateArray([1,2,3,4,5,6,7],3));

function rotateArray2(numArray, numOfShift) {
    numOfShift = numOfShift % numArray.length; 
    console.log('numofshfu', numOfShift, numArray.length, numArray.slice(-numOfShift))

    let rotatedArray = [...numArray.slice(-numOfShift), ...numArray.slice(0, numArray.length - numOfShift)];

    return rotatedArray;
}

console.log('2nd approach',rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
