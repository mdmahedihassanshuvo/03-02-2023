let phones = [
    {neme: "vivo", price: 12000, color: "black"},
    {name: "itel", price: 70000, color: "blue"},
    {name: "htc", price: 1400, color: "gray"},
    {name: "oppo", price: 26000, color: "white"}
]

function lowestPrice(phones){
    let lowestPhone = phones[0];
    // console.log(lowestPhone);
    for(var i = 0; i < phones.length; i++){
        // console.log(array[i]);
        let phone = phones[i]
        if(phone.price < lowestPhone.price){
            lowestPhone = phone.price;
        }
    }
    return lowestPhone;
}

const lowestPhone = lowestPrice(phones);
console.log(lowestPhone);