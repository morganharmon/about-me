function duplicateEncode(word) {
    let array = [];
    let matches = [];
    let answer = '';
    for (let i = 0; i < word.length; i++) {
        array[i] = word.slice(i, i + 1).toLowerCase();
    }
    for (let j = 0; j < array.length; j++) {
        if (array.indexOf(array[j], j + 1) === -1) {
            array[j] = '(';
        } else {
            matches.push(array.indexOf(array[j], j + 1));
            array[j] = ')';
        }
    }
    for (let match in matches) {
        array[matches[match]] = ')';
    }
    for (let letter of array) {
        answer += letter;
    }
    console.log(answer);
    return answer;
}
duplicateEncode('banana');