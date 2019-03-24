// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let resultDict = {};
    let ostatok = 0;

    let currencies = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    }

    if (currency <= 0) {
        return {};
    }
    else if (currency > 10000) {
        return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    }

    for (let currentCurrency in currencies) {
        let currencyValue = currencies[currentCurrency];
        let numberOfCoins = Math.floor(currentCurrency / currencyValue);
        if (numberOfCoins == 0) {
            continue;
        }
        currency = currency - numberOfCoins * currencyValue;
        resultDict[currency] = numberOfCoins;
        if (currency == 0) {
            break;
        }
    }
    return resultDict;
}
