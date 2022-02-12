"use strict";
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("index.html", generatePage(name, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Chceck out index.htnl to see the output!")
});

