// Using require() in ES5
var FB = require('fb');

//enabling server
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

// node js test
var me = 'mithilesh';
console.log(me);
var a = 5+3;
mse(a);

function mse(a){
    console.log(a);
}
