/*
find missing number or number in a given array
input = [1,2,3,6]
output=[4,5]
*/

function findMissing(numArray){
    let result = [];
    let minNum = Math.min(...numArray);
    let maxNum = Math.max(...numArray);
    console.log('min', minNum, maxNum)
    for(let i=minNum;i<maxNum;i++){
        if(numArray.indexOf(i) < 0){
            console.log('step', numArray.indexOf(i))
            result.push(i)

        }
    }
    return result

}
console.log(findMissing([1,2,3,6]))

function findMissing2(numArray){
    let result = [];
    let numSet = new Set(numArray);
    let minNum = Math.min(...numArray);
    let maxNum = Math.max(...numArray);
    for (let i = minNum; i <= maxNum; i++) {
        if (!numSet.has(i)) {  // O(1) lookup
            result.push(i);
        }
    }
    return result

}

console.log(findMissing2([1,2,3,6]))