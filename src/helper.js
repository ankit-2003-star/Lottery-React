function genTicket(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr
}
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
    // return arr.reduce((a, b) => a + b, 0);2
}

export { genTicket , sum }