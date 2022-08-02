let number = 100;

function rangeNumbers(n) {
    if (n >= 100 && n <= 200) {
        return "Liczba znajduje się w przedziale";
    } else {
        return "Liczba nie znajduje się w przedziale";
    }
}

console.log(rangeNumbers(number));