// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     console.log('accumulator', accumulator, 'currentValue', currentValue)
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

const numbers2 = [6, 2, 8, 1, 9, 4];

const max = numbers2.reduce((accumulator, currentValue) => {
    console.log('accumulator', accumulator, 'currentValue', currentValue)
  return Math.max(accumulator, currentValue);
}, numbers2[0]);

console.log(max); // Output: 9
