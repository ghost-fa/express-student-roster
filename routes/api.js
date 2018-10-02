const path = require('path');
const fs = require('fs')
const express = require('express');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const router = express.Router();

const studentJson = path.join(__dirname, '..', 'data', 'students.json')


function addToJson(path){
  return async(req, res, next) =>{
    const data = await readFile(path).then(JSON.parse);
    const newStudent = req.body;
    data.push(newStudent);
    await writeFile(path, JSON.stringify(data, null, 2)),
    next();
  }
}

router.get('/students',(req, res) =>{
  res.sendFile(studentJson)
});

router.post('/students', express.urlencoded(), addToJson(studentJson), (req, res) =>{
  res.send('your rquest is send')
})

module.exports = router;
