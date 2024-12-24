const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  const data = {
    message: 'Hello from Node.js',
  };
  response.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Additional error handling logic here, such as logging to a file or sending an alert
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});