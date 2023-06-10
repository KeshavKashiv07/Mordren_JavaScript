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



//Find the inventory of each non-premium products using function chaining
//Pass the products as parameter to the function
function findInventoryUsingFunctionChaining(Products) {
    const nonPremiumStock = Products.filter(array => {                     // array = its just a parameter of function , in arrow function we dont want to mention any name of a function and not any function keyword
        return array.price <= 300
    }).reduce((stocks, pName) => {
        let productIndex = stocks.map(s => s.productName).indexOf(pName.productName);
        if (productIndex >= 0) {
            stocks[productIndex].stock += 1;
        }
        else
            stocks.push({
                "productName": pName.productName,
                "stock": 1
            });
        return stocks;
    }, [])
    return nonPremiumStock;
}
console.log(findInventoryUsingFunctionChaining(products));



// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findInventoryUsingFunctionChaining
}


