function format_money(currency, amount) {
    var symbol = format_money.map[currency];
    if (symbol === undefined) {
        return currency + ' ' + amount;
    }
    return symbol + amount;
}

// Taken with modifications from:
//    https://github.com/bengourley/currency-symbol-map/blob/master/map.js
// When we need to handle more currencies please look there.
format_money.map = {
    "USD": "$",
    "GBP": "£",
    "AUD": "A$",
    "EUR": "€",
    "JPY": "¥",
};

if (typeof module !== 'undefined') {
    module.exports = {
        format_money: format_money,
    };
}
