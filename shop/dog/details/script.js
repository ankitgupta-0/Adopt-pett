

// script.js
// Example dog data
const dogs = [
    {
        id: 1,
        productName: 'Max',
        breed: 'Breed A',
        gender: 'Male',
        description: 'A playful and energetic puppy.',
        price: 500,
        qty: 1,
        imgUrl: 'images/dog1.jpg'
    },
    // Add other dogs as needed
];

let cartList = [];

function addToCart(dog) {
    const existingDog = cartList.find(item => item.id === dog.id);
    if (existingDog) {
        existingDog.qty += 1;
    } else {
        cartList.push({ ...dog });
    }
    renderCart();
}

function decreaseQty(dog) {
    const existingDog = cartList.find(item => item.id === dog.id);
    if (existingDog.qty > 1) {
        existingDog.qty -= 1;
    } else {
        deleteProduct(dog);
    }
    renderCart();
}

function deleteProduct(dog) {
    cartList = cartList.filter(item => item.id !== dog.id);
    renderCart();
}

function renderCart() {
    const cartListContainer = document.getElementById('cart-list');
    const noItemsMessage = document.getElementById('no-items');
    const totalPriceElement = document.getElementById('total-price');

    cartListContainer.innerHTML = '';
    let totalPrice = 0;

    if (cartList.length === 0) {
        noItemsMessage.style.display = 'block';
    } else {
        noItemsMessage.style.display = 'none';

        cartList.forEach(item => {
            const productQty = item.price * item.qty;
            totalPrice += productQty;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-list';

            cartItemDiv.innerHTML = `
                <div class="row">
                    <div class="image-holder col-sm-4 col-md-3">
                        <img src="${item.imgUrl}" alt="${item.productName}">
                    </div>
                    <div class="col-sm-8 col-md-9">
                        <div class="row cart-content justify-content-center">
                            <div class="cart-details col-xs-12 col-sm-9">
                                <h3>${item.productName}</h3>
                                <h4>₹${item.price}.00 * ${item.qty}
                                    <span>₹${productQty}.00</span>
                                </h4>
                            </div>
                            <div class="cartControl col-xs-12 col-sm-3">
                                <button class="incCart" onclick="addToCart(${item.id})">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <button class="desCart" onclick="decreaseQty(${item.id})">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="delete" onclick="deleteProduct(${item.id})">
                        <ion-icon name="close"></ion-icon>
                    </button>
                </div>
            `;

            cartListContainer.appendChild(cartItemDiv);
        });
    }

    totalPriceElement.textContent = `₹${totalPrice}.00`;
}

// Example usage: Adding Max to the cart
addToCart(dogs[0]);
