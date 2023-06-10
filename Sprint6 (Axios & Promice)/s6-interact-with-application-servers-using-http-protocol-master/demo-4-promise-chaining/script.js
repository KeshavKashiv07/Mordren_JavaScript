const order_url = "http://localhost:3000/orders/9876867986";
const customer_url = "http://localhost:3000/customers";

function fetchOrders(order_url) {
    let order;
    let getPromise = axios.get(order_url)
    getPromise
        .then((response) => {
            order = response.data;
            return axios.get(`${customer_url}/${response.data.customerId}`)
        })
        .then((response) => {
            let customer = response.data;
            let orderWithCustomer = { ...order, customer };
            console.log(typeof (orderWithCustomer.products));
            let orderList = document.getElementById("order-list");
            for (data in orderWithCustomer) {

                if (data === "customer") {
                    
                    orderList.innerHTML += `<li style="list-style:none; font-weight:bold"><h4>Customer Details</h4> </li>`;
                    orderList.innerHTML += `Name: ${orderWithCustomer[data].name} <br/>` +
                        `Gender: ${orderWithCustomer[data].gender} <br/>` +
                        `Phone: ${orderWithCustomer[data].phone}<br/>` +
                        `Address: ${orderWithCustomer[data].address}<br/>` +
                        `Email: ${orderWithCustomer[data].email}`
                }
                else if (data === "products") {
                    
                    orderList.innerHTML += `<li style="list-style:none; font-weight:bold"><h4>Products Purchased</h4> </li>`;
                    orderList.innerHTML += orderWithCustomer[data].map(item => {
                        return `Product Name: ${item.productName}<br/>Price: ${item.price}<br/>Quantity: ${item.quantity}`
                    })
                }
                else {
                    orderList.innerHTML += `<li style="list-style:none"><h4>${data}: ${orderWithCustomer[data]}</h4></li>`;
                    console.log(`${data}: ${orderWithCustomer[data]}`);
                }
            }
        })
}

fetchOrders(order_url);

console.log("hello");




