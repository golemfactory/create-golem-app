const fs = require("fs");

const json = JSON.parse(fs.readFileSync(__dirname + "/../package.json").toString());

module.exports.version = json.version;
