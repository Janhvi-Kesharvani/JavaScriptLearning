const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => (acc+currVal),0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        ItemPrice : 2999
    },
    {
        itemName : "py course",
        ItemPrice : 999
    },
    {
        itemName : "mobile dev course",
        ItemPrice : 5999
    },
    {
        itemName : "Data science",
        ItemPrice : 12999
    },
]

const PriceTotal = shoppingCart.reduce( (acc, item) => acc + item.ItemPrice, 0)
console.log(PriceTotal);
