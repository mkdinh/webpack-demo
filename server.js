// create server
const express = require('express');
const app = express();
// specify port
const PORT = 3000;

// serve file
app('*', function (req, res) {
  res.send('./dist/index.html');
})

app.listen(PORT, function () {
  console.log('listening to port: ' + PORT);
})

