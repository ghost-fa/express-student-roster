const path = require('path');
const fs = require('fs')
const express = require('express');

const router = express.Router();



router.get('/students',(req, res) =>{
  res.sendFile(path.join(__dirname, '..', 'data', 'students.json'))
});


module.exports = router;
