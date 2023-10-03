#!/usr/bin/env node

const cc = require("@golem-sdk/cli/dist/new/new.command");
const v = require("./version");
cc.newCommand.version(v.version);
cc.newCommand.parse();
