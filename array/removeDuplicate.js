/**
 Remove duplicate from sorted array
 Given a sorted array nums remove the duplicate inplace such that each element appears only once
 do not allocate the extra space for another array
 input= nums = [0,0,1,1,1,2,2,3,3,4]
 otput [0,1,2,3,4]
 */

 function removeDuplicate(numArray){
    let i=0;
    for(let j=1;j<numArray?.length;j++){
        if(numArray[i] !== numArray[j]){
            i++
            numArray[i] = numArray[j];
        }
    }
    numArray.length = i +1
    return numArray

 }

 console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))