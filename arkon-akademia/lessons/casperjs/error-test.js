// node_modules/casperjs/bin/casperjs test error-test.js
casper.test.begin('error-test', 0, function (test) {
    casper.on('remote.message', function (message) {
        this.die('Hibauzenet az oldalon: ' + message);
    });

    casper.start('http://ingatlan.com', function () {
        test.assertTitle('ingatlan.com - A legtöbb ingatlan egy helyen.');
        this.evaluate(function () {
            console.error('valami hiba');
        });
    });

    casper.run(function () {
        test.done();
    })
});