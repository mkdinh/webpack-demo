// create dependencies
const express = require('express');
const path = require('path');
// create server
const app = express();
// specify port
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

// serve file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
})

app.listen(PORT, function () {
  console.log('listening to port: ' + PORT);
})

