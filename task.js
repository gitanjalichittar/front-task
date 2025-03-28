const radioButtons = document.querySelectorAll('input[name="quantity"]');
const totalPrice = document.getElementById('total-price');

radioButtons.forEach(radio => {
    radio.addEventListener('change', updatePrice);
});

function updatePrice() {
    let selectedValue = document.querySelector('input[name="quantity"]:checked').value;
    let price;

    switch (selectedValue) {
        case '1':
            price = 10.00;
            break;
        case '2':
            price = 18.00;
            break;
        case '3':
            price = 24.00;
            break;
    }

    totalPrice.textContent = $$
    {price.toFixed(2)} USD;
}

