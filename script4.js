//func er second part ekhan theke shuru
document.getElementById('sixteenGB').addEventListener("click", function () {


    updatePrice('memory-cost', 300);

});
// document.getElementById('eightGB').addEventListener('click', function () {
//     updatePrice('memory-cost', 0)
// });
// document.getElementById('ssd3').addEventListener('click', function () {
//     updatePrice('storage-cost', 500);
// });
// document.getElementById('ssd2').addEventListener('click', function () {
//     updatePrice('storage-cost', 300);
// });
// document.getElementById('ssd1').addEventListener('click', function () {
//     updatePrice('storage-cost', 0);
// });
// document.getElementById('paid-delivery').addEventListener('click', function () {
//     updatePrice('delivery-cost', 20);
// });
// document.getElementById('free-delivery').addEventListener('click', function () {
//     updatePrice('delivery-cost', 0);
// });

//new function
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
        // document.getElementById(clickId).style.backgroundColor = "cornflowerblue"; eta korle click korar por ekta select hoye thakbe but onno arekta click korleo sheta jabe na 
    });
}
onClick('sixteenGB', 'memory-cost', 300);
onClick('eightGB', 'memory-cost', 0);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 300);
onClick('ssd3', 'storage-cost', 500);
onClick('paid-delivery', 'delivery-cost', 20);
onClick('free-delivery', 'delivery-cost', 0);




















function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;


    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

//coupon er jonno code
const couponCode = "Ayon";
document.getElementById('apply-btn').addEventListener('click', function () {
    const code = document.getElementById('promo-input').value;
    // console.log(code); run kore dekhbo
    if (code === couponCode) {
        // console.log('correct');
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText); //const na diye etake let dibo
        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        //sudhu total price update korlei hbe na UI tao update korte hbe 
        total.innerText = totalPrice;

    } else {

    }
})



