// const aluPrice = 25;
// const ricePrice = 70;
// const fishPrice = 200;

// const aluQuantity = 5;
// const riceQuantity = 3;
// const fishQuantity = 1.5;

function priceResult(aluQuantity, riceQuantity, fishQuantity) {
    const aluPrice = 25;
    const ricePrice = 70;
    const fishPrice = 200;
    const totalAluPrice = aluPrice * aluQuantity;
    const totalRicePrice = ricePrice * riceQuantity;
    const totalFishPrice = fishPrice * fishQuantity;
    let total = totalAluPrice + totalFishPrice + totalFishPrice;
    return total;
}

const total = priceResult(5, 3, 1.5);
console.log(total);



