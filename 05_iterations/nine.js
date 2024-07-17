const myNums = [1,2,3]
// helps is shopping cart

// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and current value: ${currval}`);
//     return acc + currval
// },0)
const myTotal = myNums.reduce((acc, currval)=> acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName :"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:999
    },
    {
        itemName:"DSA",
        price:1999
    },
    {
        itemName:"data science course",
        price:12999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);