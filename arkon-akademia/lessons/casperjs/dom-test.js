// node_modules/casperjs/bin/casperjs test dom-test.js
casper.test.begin('dom-test', 0, function (test) {
    casper.start('http://ingatlan.com/', function () {
        this.click('#results-filter-open');
    });
    casper.then(function () {
        test.assertExists('#szukito.lenyitva', 'Ki lehet nyitni a szukitot.');
    });
    casper.then(function () {
        this.click('#results-filter-open');
    });
    casper.then(function () {
        test.assertNotExists('#szukito.lenyitva', 'Be lehet zarni a szukitot.');
    });
    casper.thenOpen('http://ingatlan.com/lista/elado+lakas', function () {
        test.assertElementCount('tr.list-row', 20, '20 talalat van egy oldalon.')
    });
    casper.run(function () {
        test.done();
    });
});
