function pangram(string) {
    if (string.toLowerCase().indexOf('a') !== -1) {
        return true;
    } else return false;
}
console.log(pangram('the quick brown fox jumps over the lazy dog'));