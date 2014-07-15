﻿module.exports = {

    "checkRandomRates": function (browser) {
        browser
            .url('https://www.binary-beta.com')
            .waitForElementVisible('body', 5000)
            .click('#trading_link a')
            .waitForElementVisible('body', 5000)
            .click('#topMenuMarket_random a')
            .waitForElementVisible('form.orderform', 5000)
            .assert.containsText('#units_for_10', '50')
        .end();
    },
};