//ekhon function diye krbo
document.getElementById('sixteenGB').addEventListener("click", function () {

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;


    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;

})

//khali id=eightGB and memoryCost 100 taka diye 8 gb'r ta kore fellam
//8gb click korle 16 gb kaj krbe na 
//16gb click korle 8 gb kaj krbe na 
document.getElementById('eightGB').addEventListener("click", function () {

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 100;


    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;

})