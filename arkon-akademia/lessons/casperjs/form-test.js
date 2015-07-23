// node_modules/casperjs/bin/casperjs test form-test.js
casper.test.begin('form-test', 0, function (test) {
    casper.start('http://ingatlan.com/', function () {
        this.sendKeys('#sf_query', 'Buda', { keepFocus : true });
    });
    //casper.waitForSelector('li.ui-menu-item[data-value="budajeno"]', function () {
    //    test.assertEquals(this.getElementAttribute('.ui-menu-item', 'data-value'), 'budapest', 'Budapest az elso talalat.');
    //});
    casper.waitForResource(/autosuggest/, function () {
        test.assertEquals(this.getElementAttribute('.ui-menu-item', 'data-value'), 'budapest', 'Budapest az elso talalat.');
    })
    casper.then(function () {
        this.sendKeys('#sf_query', casper.page.event.key.Enter);
    })
    casper.then(function () {
        test.assertExist('#autosuggest-item-11', 'Budapestet ki lehet valasztani az <Enter> gombbal.');
    })
    casper.run(function () {
        test.done();
    });
});