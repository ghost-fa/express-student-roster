const path = require('path');
const fs = require('fs')
const express = require('express');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const router = express.Router();



router.get('/students',(req, res) =>{
  res.sendFile(path.join(__dirname, '..', 'data', 'students.json'))
});

router.post('/students', express.urlencoded(), (req, res) =>{
  res.send('your rquest is send')
})

module.exports = router;
