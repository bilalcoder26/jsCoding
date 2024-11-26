// find max number of array

const array = [12, 17,18, 0, 3,25,456,56,23,24,34];

// incorrect approach
/*The condition if(numArray[i] >= numArray[j+1]) references 
 an index (j+1) outside the array bounds, leading to a potential error.*/

/*Even if the code worked, the logic doesn't correctly determine the maximum value. 
It only updates result when numArray[i] 
is greater than or equal to the value at j+1 ? */

const findMaxNum1 =(numArray)=>{
    if(!numArray.length) return;
    let result = 0;
    for(let i=0; i<numArray.length-1; i++){
        for(let j=i+1; j<=numArray.length-1; j++){
            if(numArray[i]>=numArray[j]){
                result = numArray[i]
            }
        }
    }
    return result;

}
console.log('findMaxNum1 wrong way it your code', findMaxNum1(array));

/* 
Time Complexity
1>Outer loop iterates over the array: o(n)
2> Inner loop iterates 
n−i−1 times for each iteration of the outer loop: o(n)(wrost case)

space complexcity
Space complexity is 

O(1) because no additional data structures are used; only a single variable (result) is used.

*/

const findMaxNum2 = (numArray) => {
    if(!numArray.length) return
    let result = numArray[0];
    for(let i=1; i<numArray.length; i++){
        if(numArray[i] >result){
            result = numArray[i]
        }
    }
return result;

}
console.log('findMaxNum2', findMaxNum2(array));

/*
Time Complexity: 

O(n) (single traversal of the array).

Space Complexity: 

O(1) (no additional space used)

*/

const findMaxWithReduce =(numArray) => {
return numArray.reduce((max, currentValue) => (currentValue > max ? currentValue : max), numArray[0])
}

console.log('findMaxWithReduce', findMaxWithReduce(array))