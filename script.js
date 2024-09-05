document.getElementById("mealType").addEventListener("change", function() {
    let mealType = parseInt(this.value);
    let dishSelect = document.getElementById("dish");
    dishSelect.innerHTML = "";  // Clear previous options
    let dishSelectionDiv = document.getElementById("dishSelection");

    if (mealType === 1) {
        dishSelectionDiv.style.display = "block";
        dishSelect.innerHTML += "<option value='5.99'>Pancakes - $5.99</option>";
        dishSelect.innerHTML += "<option value='6.99'>Omelette - $6.99</option>";
        dishSelect.innerHTML += "<option value='3.99'>Cereal - $3.99</option>";
    } else if (mealType === 2) {
        dishSelectionDiv.style.display = "block";
        dishSelect.innerHTML += "<option value='8.99'>Burger - $8.99</option>";
        dishSelect.innerHTML += "<option value='7.99'>Salad - $7.99</option>";
        dishSelect.innerHTML += "<option value='6.49'>Sandwich - $6.49</option>";
    } else if (mealType === 3) {
        dishSelectionDiv.style.display = "block";
        dishSelect.innerHTML += "<option value='14.99'>Steak - $14.99</option>";
        dishSelect.innerHTML += "<option value='12.99'>Pasta - $12.99</option>";
        dishSelect.innerHTML += "<option value='9.99'>Pizza - $9.99</option>";
    } else {
        dishSelectionDiv.style.display = "none";
    }
});

function calculateTotal() {
    let dishPrice = parseFloat(document.getElementById("dish").value);
    let totalPriceElement = document.getElementById("totalPrice");

    if (isNaN(dishPrice)) {
        totalPriceElement.textContent = "Please select a valid dish.";
    } else {
        totalPriceElement.textContent = "Your total is $" + dishPrice.toFixed(2) + ". Thank you for your order!";
    }
}
