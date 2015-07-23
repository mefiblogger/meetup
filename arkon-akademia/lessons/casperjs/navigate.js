// node_modules/casperjs/bin/casperjs navigate.js
var casper = require('casper').create();

casper.start('http://ingatlan.com', function () {
    this.echo('Az ingatlan.com oldal title-je: \n' + this.getTitle());
});

casper.run();