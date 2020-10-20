let arr = [0, 14, 56, 98, 0, 244, 2, 0, 78];

const noZeros = (num) => {
    return num >= 1;
}

let arrayReturn = () => {
    console.log("hello there");
    document.getElementById("no-zeros-allowed").innerHTML = arr.filter(noZeros);
}