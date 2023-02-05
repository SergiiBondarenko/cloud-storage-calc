const currValStor = document.getElementById('currentValStor');
const currValTrans = document.getElementById('currentValTrans');

const storageRange = document.getElementById('storageRange');
const transferRange = document.getElementById('transferRange');

const priceBackblaze = document.getElementById('priceBackblaze');
const priceBunny = document.getElementById('priceBunny');
const priceScaleway = document.getElementById('priceScaleway');
const priceVultr = document.getElementById('priceVultr');

const diagramBackblaze = document.getElementById('diagramBackblaze');
const diagramBunny = document.getElementById('diagramBunny');
const diagramScaleway = document.getElementById('diagramScaleway');
const diagramVultr = document.getElementById('diagramVultr');

const ssdButton = document.getElementById('ssd');
const hddButton = document.getElementById('hdd');

let bunnyTypeOfDisk = 0.01;
ssdButton.addEventListener('input', () => {
    bunnyTypeOfDisk = 0.02;
    pricesCalc();
});
hddButton.addEventListener('input', () => {
    bunnyTypeOfDisk = 0.01;
    pricesCalc();
});

const multiButton = document.getElementById('multi');
const singleButton = document.getElementById('single');

let scalewayTypeOfCon = 0.06;
multiButton.addEventListener('input', () => {
    scalewayTypeOfCon = 0.06;
    pricesCalc();
});
singleButton.addEventListener('input', () => {
    scalewayTypeOfCon = 0.03;
    pricesCalc();
});

storageRange.addEventListener('input', () => {
    pricesCalc();
})
transferRange.addEventListener('input', () => {
    pricesCalc();
})

let arrOfPrices = [];

function pricesCalc() {
    let backblazePrice = 0;
    backblazePrice += storageRange.value * 0.005;
    backblazePrice += transferRange.value * 0.01;
    backblazePrice < 7 ? backblazePrice = 7 : backblazePrice;
    diagramBackblaze.style.width = (backblazePrice * 10) + "px";
    priceBackblaze.innerHTML = backblazePrice + " $";

    let bunnyPrice = 0;
    bunnyPrice += storageRange.value * bunnyTypeOfDisk;
    bunnyPrice += transferRange.value * 0.01;
    bunnyPrice > 10 ? bunnyPrice = 10 : bunnyPrice;
    diagramBunny.style.width = (bunnyPrice * 10) + "px";
    priceBunny.innerHTML = bunnyPrice + " $";

    let scalewayPrice = 0;
    storageRange.value > 75 ? scalewayPrice += (storageRange.value - 75) * scalewayTypeOfCon : scalewayPrice;
    transferRange.value > 75 ? scalewayPrice += (transferRange.value - 75) * 0.02 : scalewayPrice;
    scalewayPrice < 0 ? scalewayPrice = 0 : scalewayPrice;
    diagramScaleway.style.width = (scalewayPrice * 10) + "px";
    priceScaleway.innerHTML = scalewayPrice + " $";

    let vultrPrice = 0;
    vultrPrice += storageRange.value * 0.01;
    vultrPrice += transferRange.value * 0.01;
    vultrPrice < 5 ? vultrPrice = 5 : vultrPrice;
    diagramVultr.style.width = (vultrPrice * 10) + "px";
    priceVultr.innerHTML = vultrPrice + " $";

    arrOfPrices.push(backblazePrice);
    arrOfPrices.push(bunnyPrice);
    arrOfPrices.push(scalewayPrice);
    arrOfPrices.push(vultrPrice);
    let indexDia = arrOfPrices.indexOf(Math.min.apply(null, arrOfPrices));
    switch (indexDia) {
        case 0: diagramBackblaze.classList.add('lowest-price');
            diagramBunny.classList.remove('lowest-price');
            diagramScaleway.classList.remove('lowest-price');
            diagramVultr.classList.remove('lowest-price');
            break;
        case 1: diagramBackblaze.classList.remove('lowest-price');
            diagramBunny.classList.add('lowest-price');
            diagramScaleway.classList.remove('lowest-price');
            diagramVultr.classList.remove('lowest-price');
            break;
        case 2: diagramBackblaze.classList.remove('lowest-price');
            diagramBunny.classList.remove('lowest-price');
            diagramScaleway.classList.add('lowest-price');
            diagramVultr.classList.remove('lowest-price');
            break;
        case 3: diagramBackblaze.classList.remove('lowest-price');
            diagramBunny.classList.remove('lowest-price');
            diagramScaleway.classList.remove('lowest-price');
            diagramVultr.classList.add('lowest-price');
            break;
    }
    arrOfPrices = [];

    currValStor.innerHTML = storageRange.value + " GB";
    currValTrans.innerHTML = transferRange.value + " GB";
};
pricesCalc();




