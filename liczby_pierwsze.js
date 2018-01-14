const rs = require("readline-sync");

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const getDivisors = (n) => {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i, n / i);
        }
    }
    return Array.from(new Set(result.sort((a, b) => a - b)));
}

const mode = rs.question("Witaj w programie firmy WIC \"CalculonPrime\"\nPodaj swój wybór:\n1-sprawdz pierwszość\n2-wygeneruj liczby pierwsze\n3-wygeneruj dzielniki\n");
switch (mode) {
    case "1": {
        const input = rs.question("Podaj liczbę do sprawdzenia czy jest pierwsza ");
        console.log(isPrime(input));
        break;
    }
    case "2": {
        let generated = 0;
        let number = rs.question("Od jakiej liczby zacząć poszukiwania ");
        let result = [];
        let maxi = rs.question("Jak dużo chcesz wygenerować liczb ");
        while (generated < maxi) {
            if (isPrime(number)) {
                result.push(number);
                generated++;
            }
            number++;
        }

        console.log(result);
        break;
    }
    case "3": {
        const input = rs.question("Jakiej liczby dzielniki chcesz poznać ");
        console.log(getDivisors(input));
        break;
    }
    default: {
        console.log("Nie rozumiem " + mode + "\nSpróbuj ponownie");
        break;
    }
}
