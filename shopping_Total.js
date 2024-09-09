const product = [
    {name: 'Shirt', price: 650 , quantity: 3},
    {name: 'Pant', price: 900, quantity: 2},
    {name: 'Shoes', price: 1500, quantity: 1},
    {name: 'Sunglass', price: 150, quantity: 2}
]

function shoppingCart(products){
    let total = 0;
    for(const product of products){
        totalProduct = product.price * product.quantity;
        total = total + totalProduct
    }
    return total;
}

const totalCost = shoppingCart(product);
console.log(totalCost);