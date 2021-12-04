
const state = {
    cart: [],
    totalAmount: 0,
};


const itemList = $('#item-list');
const cartItemList = $('#cart-item-list');
const cartTotalAmountLabel = $("#cart-total-amount-label");
const payForm = $('#pay-form');


payForm.on('submit', function (e) {
    e.preventDefault();
    /**
     * We don't need to handle this
     * if the cart is empty
     */
    const isCartEmpty = state.cart.length === 0;

    if (isCartEmpty) {
        return;
    }

    const formData = new FormData(this);
    /**
     * Start constructing the object to send
     */
    const payAmountText = formData.get('amount');

    if (payAmountText.length === 0) {
        alert("Please enter an amount.");
        return;
    }
    const amount = state.totalAmount;
    const payAmount = Number(payAmountText);

    if (payAmount < amount) {
        alert('Payment amount cannot be less than the total.');
        return;
    }
    // Compute Change
    const change = payAmount - amount;
    const now = new Date();
    const itemsMessage = state.cart.map((item) => `${item.name} - x${item.quantity}`).join('\n');
    const divider = '-----------------------------------------------------';
    alert(`
TRANSACTION SUCCESS!

${divider}

Date of Transaction: ${now.toLocaleDateString()}

${itemsMessage}

Total Price: PHP${amount}
Change: PHP${change}

${divider}

Thank you for trying out this system!
    `);
    resetCart();
    payForm.trigger('reset');
});




const onAddToCartPressed = (item) => {
    /**
     * Get the quantity from the input
     */
    const quantity = $(`#item-${item.id} > input`).val();

    /**
     * Check if the item is already existing in the cart
     */

    const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        state.cart[index].quantity = parseInt(quantity);

    } else {
        state.cart.push({
            ...item,
            quantity: Number(quantity),
        });
    }
    updateCart();
};

const onRemoveItemFromCartPressed = (cartItem) => {
    const cart = state.cart;
    state.cart = cart.filter((item) => item.id !== cartItem.id);
    updateCart();
};


const updateCart = () => {
    cartItemList.empty();
    cartTotalAmountLabel.empty();
    const cart = state.cart;
    const totalAmount = cart.reduce((a, b) => {
        return a + (b.price * b.quantity);
    }, 0);
    state.totalAmount = totalAmount;
    state.cart.forEach((cartItem) => {
        const cartItemElement = renderCartItem(cartItem);
        cartItemList.append(cartItemElement);
        $(`#cart-item-${cartItem.id} > #remove-btn`).on('click', () => onRemoveItemFromCartPressed(cartItem));
    });
    cartTotalAmountLabel.html(`PHP ${totalAmount}`);
};

const resetCart = () => {
    state.cart = [];
    updateCart();
};

const renderCartItem = (cartItem) => {
    const { name, id, price, quantity } = cartItem;

    return `
    <li id="cart-item-${id}" class="flex space-x-4 items-center ">
    <button id="remove-btn" class="transition transform duration-300 hover:scale-105">
    ${removeIcon}
    </button>
    <div class="flex flex-col space-y-2">
    <span class="font-bold">${name}</span>
    <span class="text-sm">Price: PHP${price}</span>
    <span class="text-sm">Quantity: ${quantity}</span>
    </div>
    <div class="flex-1"></div>
    <span class="font-bold">Total Amount: PHP${price * quantity}</span>
  </li>
    `;
};

const renderItem = (item) => {
    const { name, id, price, } = item;

    return `
    <li id="item-${id}" class="flex space-x-4 items-center justify-between">
    <span> ${name} - ${price}PHP</span>
    <input class="border border-gray-200 rounded-lg px-4 "  type="number" value="1" />
    <button
      class="
        bg-blue-200
        px-4
        py-2
        rounded-lg
        font-bold
        transition
        duration-300
        transform
        hover:scale-105 hover:shadow-lg
      "
    >
      Add to cart
    </button>
  </li>
    `;
};

$(function () {
    /**
     * Handle the rendering of each items
     */
    items.forEach((item) => {
        const itemElement = renderItem(item);
        itemList.append(itemElement);
        $(`#item-${item.id} > button`).on('click', () => onAddToCartPressed(item));
    });
    updateCart();
});





