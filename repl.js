var path = require('path');

exports.init = function _init(settings) {
    var commandPath = path.join(__dirname, '/commands');

    if (settings.custom_commands_path) {

        // If string, then convert to single element array
        if(typeof settings.custom_commands_path === 'string') {
            var existing = settings.custom_commands_path;
            settings.custom_commands_path = [existing];
        }

        // append repl command path
        settings.custom_commands_path.push(commandPath);
    } else {
        settings.custom_commands_path = [commandPath];
    }
};
