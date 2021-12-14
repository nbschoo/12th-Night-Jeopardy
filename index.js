const path = require('path');
const fs = require('fs');
const exp = require('express');
const express = exp();

const port = 3000;

console.log(`Node.js v${process.versions.node}!`);

//---send index file on empty directory---
express.get('/', (req, res) => {
  res.send(fs.readFileSync('/pages/index.html'));
});

//---send static folder on /static directory---
express.get('/static', express.static('public/static'));

express.listen(port, () => {
  console.log('Express now listening on port ' + port);
});
