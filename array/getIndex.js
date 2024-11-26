const shoppingList = [
    'bread',
    'milk',
    'pie',
    'juice'
  ]

//   Option 1: .keys()
// for(const index of shoppingList.keys()){
//     console.log(`keys ${shoppingList[index]} at ${index}`)
// }

//Option 2: .entries()

for (const [index,shoppingItem] of shoppingList.entries()){
    console.log(`enteries ${shoppingItem} at ${index}`)
}