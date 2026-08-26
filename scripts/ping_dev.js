const http = require('http');

function check() {
  http.get('http://localhost:3005/', (res) => {
    console.log('Server response code:', res.statusCode);
  }).on('error', (err) => {
    console.log('Waiting for server...', err.message);
    setTimeout(check, 1000);
  });
}

check();
