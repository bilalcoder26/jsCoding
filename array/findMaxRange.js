const array = [5,5,5,0,2,9,9,2,1,3,4,5,3,3,5,9,0,4,1,1]
//output = [5,0,2,9,1,3,4] and count no of occurence

function findMaxRange(numArray){
    if(!numArray?.length) return;
    let numberCount = {};
   for(let num of numArray){
    console.log('num', num)
    // console.log('numCount', numberCount[num])
    numberCount[num] = (numberCount[num] || 0) + 1;
   }
   console.log('numberCount', numberCount)
   const uniqueArray = Object.keys(numberCount)?.map(Number)
   return uniqueArray;

}

console.log(findMaxRange(array))

function preserveTheOrder(numArray) {
    let count = {};
    let uniqueArray = [];
    for (let num of numArray) {
        // Check if the number is not already in the count object
        if (!(num in count)) {
            uniqueArray.push(num);
        }
        // Increment the count for this number
        count[num] = (count[num] || 0) + 1;
    }
    return { count, uniqueArray };
}

console.log(preserveTheOrder(array));
