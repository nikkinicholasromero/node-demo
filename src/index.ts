import http from 'http';

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World');
};

const server = http.createServer(requestHandler);

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
