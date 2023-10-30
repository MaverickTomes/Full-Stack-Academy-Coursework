// TODO: this file! :)
/*
console.log("connected!")

const nums = [1,2,3,4,5,6,7,8,9,10,11];
let evens = [2,4,6,8,10]; 
let odds = [1,3,5,7,9,11];

const form = document.querySelector('form');
const input = document.getElementById("number");

function addToBank() {
  let addedNumbers = document.forms["addNumber"]["number"].value;
}

-I think I started to set it up okay but when I got to this point I was lost on what to do
-The TO-DO list that was posted was very helpful after I got frustrated and gave up. Thank you
for sharing that because it better lays out how I should organize my thoughts for the next workshop.
*/

const numInput = document.querySelector('form>label>input');
const numForm = document.querySelector('form');
const numberBank = document.querySelector('#numberBank>output')
const oddsBank = document.querySelector('#odds>output');
const evensBank = document.querySelector('#evens>output');
const sortOneBtn = document.getElementById('sortOne');
const sortAllBtn = document.getElementById('sortAll');

const numbers = [];

numForm.addEventListener('submit', (event) => {
    event.preventDefault();
    numbers.push(numInput.value); // add new number to the bank
    numInput.value = '';  // clear the form

    updateBanks();
});

sortOneBtn.addEventListener('click', () => {
    // Can skip - not clear from instructions what this button is intended to do
});

sortAllBtn.addEventListener('click', () => {
    numbers.sort();
    updateBanks();
});

function updateBanks() {
    numberBank.textContent = numbers.join(', ');  // update the bank display

    const odds = ['1', '3', '5', '7', '9'];
    const sortedOdds = numbers.filter((n) => odds.includes(n[n.length-1]));
    oddsBank.textContent = sortedOdds.join(', ');

    const evens = ['0', '2', '4', '6', '8'];
    const sortedEvens = numbers.filter((n) => evens.includes(n[n.length-1]));
    evensBank.textContent = sortedEvens.join(', ');
}

