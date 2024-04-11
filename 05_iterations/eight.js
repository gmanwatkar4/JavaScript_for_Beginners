// reduce function

const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce( function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)

console.log(myTotal);   // 15

const myTotal1 = myNums.reduce( (acc, curval) => acc+curval, 0)
console.log(myTotal1);  // 15

const shoppingCart = [
    {
        itemname: "js course",
        price: 999

    },
    {
        itemname: "mobile dev course",
        price: 1999

    },
    {
        itemname: "js course",
        price: 9999

    }

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);    // 12997