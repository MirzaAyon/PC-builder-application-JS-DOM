console.log('done');
// //for dark mode
// document.body.style.background = '#1E293B';
// document.body.style.color = '#94A3B8';
// //mdn er webiste e giye ei 2 code console e c/p kore run korlei dark mode chole ashbe


// //image hide kore reading mode anar jonno
// let images = document.getElementsByTagName('img');
// for (let img of images) {
//     img.style.display = 'none';
// }
// //kono kichu google korar por shetake inspact kore ei code dile shob img chole jabe

// //ekhn korbo blue korar system
// let photoes = document.getElementsByTagName('img');
// for (let img of photoes) {
//     img.style.filter = 'Blur(10px)';
// }
// //pic shob blur hoye jabe
document.getElementById('sixteenGB').addEventListener("click", function () {
    // console.log('click'); // console e giye dekhbo je click ta kaj kortese kina
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;
    //ekhn ettuk korei 16gb te click korlei 200 hoye jachee
    /* jodi jog kore chai tahole code hbe 
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseFloat(memoryCost.innerText) + 200;
    tokhn 16 gb bar bar click korle 200,400 kore barbe 
    */

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;

})
//ekhn same jinish 4 bar repeat kore prottek bar clickable korte hbe
//tai baki part ta porer file e func diye krbo
