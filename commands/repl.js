var readline = require('readline');
var figlet = require('figlet');

var rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.command = function repl(callback) {
    return this.perform(function(browser, done) {
        console.log(figlet.textSync('Nightwatch REPL', {
            font: 'big',
            horizontalLayout: 'fitted',
            verticalLayout: 'fitted'
        }));
        console.log('Type in a command (eg: browser.function()) or type "quit" to exit');
        function getcmd() {
            rli.question('repl> ', function(answer) {
                if (answer === 'quit') {
                    console.log('exiting repl...')
                    rli.close();
                    done();
                } else {
                    try {
                        console.log(eval(answer))
                    } catch (err) {
                        console.log(err);
                    } finally {
                        getcmd();
                    }

                }
            });
        }
        getcmd();
    });
};