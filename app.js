// import functions

// grab DOM elements
const dogDiv = document.getElementById('dogDiv');
const button = document.getElementById('button');

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
button.addEventListener('click', () => {
    dogDiv.classList.toggle('hidden');
});