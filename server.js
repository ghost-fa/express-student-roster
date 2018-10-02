const path = require('path')
const args = process.argv.slice(2);
const port = args[0] || 3000
const express = require('express');
const apiRouter = require('./routes/api');
const app= express();

app.use(express.static('static/student-roster'))


app.use('/api', apiRouter)

app.listen(port, () =>{
  console.log(`you are listen in port ${port}`)
});
