/**
 * finding second largest number
 */

function findSecondLargest(numArray){
    if(numArray.length<2) return "Array must have at least two elements"
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    for(let num of numArray){
        // console.log('num', num,'firstLargestNumber',firstLargestNumber)
        if(num > firstLargestNumber){
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = num;
        }
        else if(num > secondLargestNumber && num <firstLargestNumber){
            secondLargestNumber = num

        }
    }
    if (secondLargestNumber === -Infinity) {
        return "No second largest number (all elements are equal)";
    }
    return secondLargestNumber

}

console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([5, 5, 5, 5]));    // Output: "No second largest number (all elements are equal)"
console.log(findSecondLargest([7]));              // Output: "Array must have at least two elements"
console.log(findSecondLargest([10, 20]));