// const Originalprice = 120;
// const discountPercentage = 18;

function PriceWithDiscount(Originalprice, discountPercentage) {
    return Originalprice * (100 - discountPercentage) / 100
};

function CalculatePriceWithDiscount() {
    const priceValue = document.getElementById("InputPrice").value;
    const discountValue = document.getElementById("InputDiscount").value;
    const pricewithdiscount = PriceWithDiscount(priceValue, discountValue);

    const resultParagraph = document.getElementById("PriceResult");
    resultParagraph.innerText = "The price with discount is $" + pricewithdiscount;
};

// console.log(
//     {Originalprice,
//     discountPercentage,
//     PriceWithDiscount
//     });