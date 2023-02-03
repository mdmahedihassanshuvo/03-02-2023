const phones = [
    {name: "oppo", price: 23000, color: "black"},
    {name: "bangal", price: 1200, color: "blue"},
    {name: "itel", price: 1400, color: "blue"}
]

function maxPrice(phones){
    let maxPhone = phones[0];
    for(var i = 0 ; i < phones.length; i++){
        // console.log(phones[i]);
        let phone = phones[i];
        // console.log(phone.price);
        if(phone.price > maxPhone.price){
            maxPhone = phone.price;
        }
    }
    return maxPhone;
}

const maxPhone = maxPrice(phones);
console.log(maxPhone);
// maxPrice(phones);