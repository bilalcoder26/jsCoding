const list = [
    { id: "1", group: "fruit", price: 30 },
    { id: "2", group: "vegitable", price: 45 },
    { id: "3", group: "fruit", price: 17 },
    { id: "4", group: "grocery", price: 1212 }
  ];
  
  const output = list.reduce((acc, item,) => {
    console.log('acc',acc, 'item',item,);
    // If the group already exists, add the price, otherwise initialize it
    acc[item.group] = (acc[item.group] || 0) + item.price;
    return acc;
  }, {});
  
  console.log(output);

  const array = [1,6,3,4,5,2,5]

  function sum(array){
    let sum = 0;
    for(const val of array){
      sum += val
    }
    return sum
  }
  console.log('with for of looop',sum(array));

  const sumWithReduce = (array) => {
    const reduce =(total, val) => total + val;
    const initialValue = 0;
    return array.reduce(reduce,initialValue);

  }

  console.log('with reduce methode',sumWithReduce(array));

  //with one liner

  const sumclean = array.reduce((total, item) => total + item, 0)
  console.log('with one liner',sumclean);

  const eleItem = [
    {
      item:"imac",
      price: 1000

    },
    {
      item:"ipad",
      price: 500

    }
  ]

  const sumPrice = eleItem.reduce((total, item) => total + item?.price, 0)

  console.log('sumPrice',sumPrice);