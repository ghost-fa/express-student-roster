const path = require('path')
const args = process.argv.slice(2);
const port = args[0] || 3000
const express = require('express');

const app= express();

app.use(express.static('static/student-roster'))

app.get('/students', (req, res) =>{
  res.sendFile(path.join(__dirname, 'data', 'students.json'))
});

app.listen(port, () =>{
  console.log(`you are listen in port ${port}`)
});
