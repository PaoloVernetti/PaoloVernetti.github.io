let fs = require("fs");
let fse = require('fs-extra');
let path = require('path');

if (fs.existsSync(path.join(__dirname, "..", "docs"))) fse.removeSync(path.join(__dirname, "..", "docs"));

fse.moveSync(path.join(__dirname, "..", ".output/public"), path.join(__dirname, "..", "docs"));

fse.removeSync(path.join(__dirname, "..", ".output"));

fse.removeSync(path.join(__dirname, "..", "dist"));