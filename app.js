// import functions

import { flip } from './flip.js';

// grab DOM elements
const dogDiv = document.getElementById('dogDiv');
const button = document.getElementById('button');
const doStuff = document.getElementById('do-stuff');

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
button.addEventListener('click', () => {
    dogDiv.classList.toggle('hidden');
});





const string = 'Thiis is another test';
let array = [];
let length = string.length;
let node = 0;
let answer = '';

doStuff.addEventListener('click', () => {
    // for (let i = 0; i < length; i++) {
    //     array[i] = string.slice(i, i + 1);
    //     if (array[i] === ' ') {
    //         if (i - node >= 5) {
    //             for (let j = i; j >= node; j--) {
    //                 answer += array[j];
    //                 console.log(answer);
    //             }
    //             node = i;
    //             console.log('new node = ' + node);
    //         } else {
    //             for (let k = node; k < i; k++) {
    //                 answer += array[k];
    //                 console.log(answer);
    //             }
    //             node = i;
    //             console.log('new node = ' + node);
    //         }
    //     } else if (i + 1 === length) {
    //         if (i - node >= 5) {
    //             for (let j = i - 1; j > node; j--) {
    //                 answer += array[j];
    //                 console.log(answer);
    //             }
    //             node = i;
    //             console.log('new node = ' + node);
    //         } else {
    //             for (let k = node; k <= i; k++) {
    //                 answer += array[k];
    //                 console.log(answer);
    //             }
    //             node = i;
    //             console.log('new node = ' + node);
    //         }
    //     }
    // }
    // console.log(answer);
    flip();
});

// count string
// start at first letter
// count til space (or end)
// track point in string
// if space >= 5, flip, add to output string
// else if, add to output string
// 
// 
// 
