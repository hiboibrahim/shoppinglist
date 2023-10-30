// Select items
const alert = document.querySelector('.alert');
const form = document.querySelector('.shopping-form');
const shopping = document.getElementById('shopping');
const submitBtn = document.querySelector('submit-btn');
const shoppingContainer = document.querySelector('.shopping-container');
const shoppingList = document.querySelector('.shopping-list');
const clearBtn = document.querySelector('.clear-btn');


// Edit options

let editElement;
let editFlag = false;
let editID = "";

// Event Listeners
form.addEventListener('submit', addItem);


// Functions
function addItem(e) {

    e.preventDefault();
    const value = shopping.value
    if (value && !editFlag) {
        console.log('add items to the list');
    }
    else if (value && editFlag) {
        console.log('editing')
    }
    else (){
        console.log('empty value');
    }
}

// Local Storage

// Setup items