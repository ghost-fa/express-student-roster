const path = require('path')
const args = process.argv.slice(2);
const port = args[0] || 3000
const express = require('express');

const app= express();

app.get('/', (req , res) =>{
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.get('/scound', (req , res) =>{
  res.sendFile(path.join(__dirname, 'static', 'new.html'))
});


app.get('/styles/main.css', (req , res) =>{
  res.sendFile(path.join(__dirname, 'static', 'styles', 'main.css'))
});

app.listen(port, () =>{
  console.log(`you are listen in port ${port}`)
});
