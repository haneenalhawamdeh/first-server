'use strict';


const express = require('express'); //require express
const server = express(); //link express with server

const PORT = process.env.PORT || 3000; // pick port num 3000 if not pick any free one 
 
server.use(express.static('./public'));

server.get('/test', (request, response) => {
  response.send('Hello its me ');
});
server.get('/data', (request, response) => {
  let family = [ {name :'haneen'},
  {name :'mohammad'},
  {name:'tahani'}
  ];
  response.json(family);
});

server.listen(PORT,() => console.log(`Listening on port `, PORT)); //which port choose
