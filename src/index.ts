import http from "http";
import { sum } from "./core";

const requestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): void => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World: " + sum(2, 5));
};

const server = http.createServer(requestHandler);

server.listen(8080);
