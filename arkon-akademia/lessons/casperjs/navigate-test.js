// node_modules/casperjs/bin/casperjs test navigate-test.js
casper.test.begin('navigate-test', 0, function (test) {
    casper.start('http://ingatlan.com/', function () {
        this.click('button#results-filter-submit')
    });
    //casper.then(function () {
    //    test.assertUrlMatch('http://ingatlan.com/lista/kiado+lakas');
    //});
    casper.waitForUrl('http://ingatlan.com/lista/elado+lakas', function () {
        test.pass('Kereses gomb megfeleloen mukodik.')
    });
    casper.run(function () {
        test.done();
    })
});