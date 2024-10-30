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

// Завдання 2
function fillTable() {
    const table = document.getElementById("table");

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (i === j) {
                table.rows[i].cells[j].textContent = "0"; // Головна діагональ
            } else if (i % 2 === 0) {
                table.rows[i].cells[j].textContent = -((i + 1) * (j + 1)); // Парні рядки
            } else {
                table.rows[i].cells[j].textContent = (i + 1) * (j + 1); // Непарні рядки
            }
        }
    }
}