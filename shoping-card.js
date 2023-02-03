let Product = [
    {name: "Shirt", price: 250, quantity: 3},
    {name: "Pent", price: 650, quantity: 2},
    {name: "belt", price: 170, quantity: 2}
]

function totalPrice(Product){
    let sum = 0
    for(var i = 0; i < Product.length; i++){
        // console.log(Product[i])
        card = Product[i];
        sum += card.price * card.quantity;
    }
    return sum;
}
const total =  totalPrice(Product);
console.log(total);