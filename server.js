'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.none('inputfield'), (req, res) => {
  console.log(req.body);
  res.send('done')
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
