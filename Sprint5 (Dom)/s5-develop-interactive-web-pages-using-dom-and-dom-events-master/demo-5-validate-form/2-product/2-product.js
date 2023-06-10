let productList = [];

function saveProduct(event) {
    event.preventDefault();
    console.log("adding");
    let product = {
        id: document.getElementById("product-id").value,
        name: document.getElementById("product-name").value,
        description: document.getElementById("product-desc").value,
        price: document.getElementById("product-price").value
    }
    productList.push(product);
    console.log(productList);
    createProductCard(product);
    clearFields();
}

function clearFields() {
    document.getElementById("product-id").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("product-desc").value = "";
    document.getElementById("product-price").value = "";
}


function createProductCard(product) {
    let containerDiv = document.getElementById('product-container');
    
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardName = document.createElement('h5');
    cardName.textContent = product.name;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardDesc = document.createElement('p');
    cardDesc.classList.add('card-text');
    cardDesc.textContent = product.description;
    let cardPrice = document.createElement('p');
    cardPrice.textContent = `${product.price} USD`;

    cardHeader.appendChild(cardName);
    cardBody.appendChild(cardDesc);
    cardBody.appendChild(cardPrice);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    
    containerDiv.appendChild(cardDiv);
}   

function displayProducts() {
    let containerDiv = document.getElementById('product-container');
    containerDiv.innerHTML = '';
    productList.forEach(product => {
        createProductCard(product);
    })
}

displayProducts();