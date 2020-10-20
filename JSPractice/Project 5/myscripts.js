let arr = [2, 3, 5, 6, 8];

let SquaredArray = (num) => {
    return arr.map(num * num);
}

const squareTheThings = (num) => {
    console.log(num * num);
}

let EngageSquares = () => {
    arr.map(squareTheThings);
}

const sum = SquaredArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
