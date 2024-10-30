// Завдання 1
const fruitSelect = document.getElementById('fruit-select');
const priceInput = document.getElementById('price-input');
const fruitList = document.getElementById('fruit-list');

priceInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const fruit = fruitSelect.value;
        const price = priceInput.value.trim();

        if (price) {
            const listItem = document.createElement('li');
            listItem.textContent = `${fruit}: ${price} грн`;
            fruitList.appendChild(listItem);

            // Очистка поля введення
            priceInput.value = '';
        }
    }
});