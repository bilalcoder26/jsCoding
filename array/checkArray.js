function checkArray(element){
   return Array.isArray(element)

}
console.log('checkArray([])', checkArray([]))
console.log('checkArray({})', checkArray({}))

let arr = [1,2,3,4,5]
arr.length = 0;
console.log('check length;',arr.length);