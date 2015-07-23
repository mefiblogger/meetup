// node_modules/casperjs/bin/casperjs test screenshot-test.js
casper.test.begin('screenshot-test', 0, function (test) {
    casper.start('http://ingatlan.com', function () {
        this.capture('screenshot.png');
        test.pass('Kepernyokep elmentve.');
    });
    casper.run(function () {
        test.done();
    });
});
