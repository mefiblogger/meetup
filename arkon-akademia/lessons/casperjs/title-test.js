// node_modules/casperjs/bin/casperjs test title-test.js
casper.test.begin('title-test', 0, function (test) {
    casper.start('http://ingatlan.com', function() {
        test.assertEquals(this.getTitle(), 'ingatlan.com - A legtöbb ingatlan egy helyen.', 'Az oldal title-je megfelelo.')
    });
    casper.run(function () {
        test.done();
    })
});