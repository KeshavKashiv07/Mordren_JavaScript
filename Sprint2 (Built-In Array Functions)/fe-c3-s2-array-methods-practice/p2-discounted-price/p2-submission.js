const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the discounted price for non-premium products using arrow functions
//Pass the products as parameter to the function
function calculateDiscountedPrice(Products){
    const nonPremium = Products.filter(array => {                     // array = its just a parameter of function , in arrow function we dont want to mention any name of a function and not any function keyword
        return array.price <= 300
    });

    const discounted = nonPremium.map(array => {
        array.price =  array.price - ((10/100)*array.price);
        return array;
    });
    return discounted

}
console.log(calculateDiscountedPrice(products))


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateDiscountedPrice
}
