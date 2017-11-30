var path = require('path');

exports.init = function _init(settings) {
    var commandPath = path.join(__dirname, '/commands');

    if (settings.custom_commands_path) {
        settings.custom_commands_path.append(commandPath);
    } else {
        settings.custom_commands_path = [commandPath];
    }
};
