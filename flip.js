
const string = 'welcome to yours dest';
let array = [];
let length = string.length;
let node = 0;
let answer = '';
for (let i = 0; i < length; i++) {
    array[i] = string.slice(i, i + 1);
    if (node === 0 && i + 1 === length) {
        if (i - node >= 5) {
            for (let j = i; j >= node; j--) {
                answer += array[j];
            }
            node = i;
        } else {
            for (let k = node; k <= i; k++) {
                answer += array[k];
            }
            node = i;
        }
    } else if (node === 0) {
        if (array[i] === ' ') {
            if (i - node >= 5) {
                for (let j = i - 1; j >= node; j--) {
                    answer += array[j];
                }
                answer += ' ';
                node = i;
            } else {
                for (let k = node; k <= i; k++) {
                    answer += array[k];
                }
                node = i;
            }
        }
    } else if (i + 1 === length) {
        if (i - node >= 5) {
            for (let j = i; j > node; j--) {
                answer += array[j];
            }
            node = i;
        } else {
            for (let k = node + 1; k <= i; k++) {
                answer += array[k];
            }
            node = i;
        }
    } else {
        if (array[i] === ' ') {
            if (i - node >= 6) {
                for (let j = i - 1; j > node; j--) {
                    answer += array[j];
                }
                answer += ' ';
                node = i;
            } else {
                for (let k = node + 1; k <= i; k++) {
                    answer += array[k];
                }
                node = i;
            }
        }
    }
}
console.log(answer);
