"use strict";

let shoppingCart = [];
let itemList = [{ name: "bandana", price: 5 },
    { name: "plaidShirt", price: 25 },
    { name: "sneakers", price: 40 },
    { name: "jeans", price: 65 },
    { name: "glasses", price: 150 }];


function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, {itemName, itemPrice}];
}

addItem("pants", 5);
addItem("shirt", 10);
addItem("shoes", 30);
console.log(shoppingCart);


function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
}

removeItem("shirt");
console.log(shoppingCart);


function editItem(itemName, newName, newPrice) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), {itemName: newName, itemPrice: newPrice}, ...shoppingCart.slice(index + 1)];
}

editItem("pants", "socks", 6);
console.log(shoppingCart);


function printTotal() {
    let total = 0;
    for (let item of shoppingCart) {
        total += item.itemPrice;
        console.log(`Item Name: ${item.itemName} Item Price: ${item.itemPrice}  Item Price with Tax: ${item.itemPrice * 1.06}`);
    }
    console.log(`Total: ${total}`);
}
printTotal();

