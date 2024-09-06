// Sélectionnez l'élément ul
const numberList = document.getElementById("number-list");

// Générez les numéros de 1 à 100
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
