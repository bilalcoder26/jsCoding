/**
 given  an integer array nums move all 0's to the end of it while maintaing the relative order of the non-zero elements
 input nums = [0,1,2,0,3,12]
 output = [1,3,12,0,0]
 */

 function arrayTransformation(numArray){
    if(!numArray?.length) return;
    let countZero = 0;
    for(let i=0; i<numArray.length;i++){
        let isZero = numArray[i] === 0;
        if(isZero){
            countZero++
            numArray.splice(i,1)
            i--
        }
        console.log(numArray,countZero);
    }
    for(let i=0; i<countZero;i++){
        numArray.push(0)
    }
    return numArray;

 }

//  console.log(arrayTransformation([0,1,2,0,3,12]))

//  splice(), which causes elements to shift and increases time complexity.

function arrayTransformationBest(numArray){
    if(!numArray.length) return ;
    let index = 0;
    for(let i=0;i<numArray.length;i++){
        if(numArray[i] !==0){
            numArray[index] = numArray[i];
            index++ 
        }
        console.log('index',index);
    }
    for (let i = index; i < numArray.length; i++) {
        numArray[i] = 0;
    }
    console.log('numArray', numArray)
    return numArray
}
console.log(arrayTransformationBest([0,1,2,0,3,12]))
