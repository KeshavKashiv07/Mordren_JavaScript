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

//filter premium products from the products passed as parameter using arrow functions
function filterProducts(Products) { 
    const premiumProducts = Products.filter(array => {                      // array = its just a parameter of function , in arrow function we dont want to mention any name of a function and not any function keyword          
        return array.price > 300
    });
    // console.log(result); 
    return premiumProducts;
}
console.log(filterProducts(products)); 



// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    filterProducts
}